import { expect, test } from '@playwright/test';

const viewports = [320, 375, 390, 430, 768] as const;

type OverflowCheck = {
  hasOverflow: boolean;
  viewportWidth: number;
  scrollWidth: number;
};

for (const width of viewports) {
  test(`homepage mobile layout check at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');

    const overflow = await page.evaluate<OverflowCheck>(() => {
      const html = document.documentElement;
      return {
        hasOverflow: html.scrollWidth > window.innerWidth,
        viewportWidth: window.innerWidth,
        scrollWidth: html.scrollWidth,
      };
    });

    expect(
      overflow.hasOverflow,
      `Horizontal overflow detected: scrollWidth=${overflow.scrollWidth}px viewportWidth=${overflow.viewportWidth}px`,
    ).toBeFalsy();

    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    const toolsSection = page.getByRole('heading', {
      name: /every tool you need/i,
      level: 2,
    });
    await expect(toolsSection).toBeVisible();

    const toolLinks = page.locator('a[href^="/"]', { hasText: /pdf/i });
    await expect(toolLinks.first()).toBeVisible();

    await expect(page).toHaveScreenshot(`homepage-mobile-${width}.png`, {
      fullPage: true,
      maxDiffPixels: 300,
    });
  });
}
