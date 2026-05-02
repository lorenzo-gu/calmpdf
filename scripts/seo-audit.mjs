#!/usr/bin/env node

const canonicalOrigin = "https://calmpdf.com";
const defaultAuditOrigins = [
  canonicalOrigin,
  "https://www.calmpdf.com",
  "http://calmpdf.com",
  "http://www.calmpdf.com",
];

const customOrigins = process.env.SEO_AUDIT_ORIGINS
  ? process.env.SEO_AUDIT_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean)
  : defaultAuditOrigins;

function fail(message) {
  console.error(`❌ ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`✅ ${message}`);
}

async function fetchWithRedirects(url, maxRedirects = 8) {
  let current = url;
  const chain = [];

  for (let i = 0; i <= maxRedirects; i += 1) {
    const response = await fetch(current, { redirect: "manual" });
    const location = response.headers.get("location");
    chain.push({ url: current, status: response.status, location });

    if (!location || response.status < 300 || response.status >= 400) {
      return { finalResponse: response, chain };
    }

    current = new URL(location, current).toString();
  }

  throw new Error(`Too many redirects for ${url}`);
}

function parseLocsFromSitemap(xml) {
  const locRegex = /<loc>(.*?)<\/loc>/g;
  const locs = [];
  let match = locRegex.exec(xml);
  while (match) {
    locs.push(match[1].trim());
    match = locRegex.exec(xml);
  }
  return locs;
}

async function main() {
  console.log(`SEO audit targets: ${customOrigins.join(", ")}`);

  const robotsUrl = `${canonicalOrigin}/robots.txt`;
  const robotsRes = await fetch(robotsUrl);
  if (robotsRes.status !== 200) {
    fail(`${robotsUrl} returned ${robotsRes.status} (expected 200)`);
  } else {
    pass(`${robotsUrl} returned 200`);
  }

  const robotsText = await robotsRes.text();
  const sitemapLine = `Sitemap: ${canonicalOrigin}/sitemap.xml`;
  if (!robotsText.includes(sitemapLine)) {
    fail(`robots.txt is missing exact sitemap line: ${sitemapLine}`);
  } else {
    pass("robots.txt includes canonical sitemap URL");
  }

  const sitemapUrl = `${canonicalOrigin}/sitemap.xml`;
  const sitemapRes = await fetch(sitemapUrl);
  if (sitemapRes.status !== 200) {
    fail(`${sitemapUrl} returned ${sitemapRes.status} (expected 200)`);
  } else {
    pass(`${sitemapUrl} returned 200`);
  }

  const sitemapXml = await sitemapRes.text();
  const locs = parseLocsFromSitemap(sitemapXml);
  if (locs.length === 0) {
    fail("sitemap.xml contains no <loc> entries");
  } else {
    pass(`sitemap.xml contains ${locs.length} URL entries`);
  }

  const nonCanonical = locs.filter((url) => !url.startsWith(canonicalOrigin));
  if (nonCanonical.length > 0) {
    fail(`sitemap.xml has non-canonical URLs, sample: ${nonCanonical.slice(0, 3).join(", ")}`);
  } else {
    pass("all sitemap URLs use canonical origin");
  }

  for (const url of locs.slice(0, 200)) {
    const { finalResponse, chain } = await fetchWithRedirects(url);
    if (chain.length > 1) {
      fail(`sitemap URL redirects: ${url} -> ${chain.map((c) => `${c.status}:${c.url}`).join(" -> ")}`);
      continue;
    }

    if (finalResponse.status !== 200) {
      fail(`sitemap URL not 200: ${url} (${finalResponse.status})`);
      continue;
    }
  }
  pass("sampled sitemap URLs did not redirect and returned 200");

  for (const origin of customOrigins) {
    const { chain } = await fetchWithRedirects(origin);
    const final = chain[chain.length - 1];
    const isCanonical = final.url.startsWith(canonicalOrigin);
    if (!isCanonical) {
      fail(`origin did not resolve to canonical host: ${origin} -> ${final.url}`);
      continue;
    }

    if (origin.startsWith("http://") && chain.length === 1) {
      fail(`origin did not redirect from HTTP to HTTPS: ${origin}`);
      continue;
    }

    pass(`origin resolves to canonical HTTPS host: ${origin} -> ${final.url}`);
  }

  if (process.exitCode) {
    process.exit(process.exitCode);
  }
}

main().catch((error) => {
  console.error(`❌ SEO audit failed with exception: ${error.message}`);
  process.exit(1);
});
