import { expect, test } from '@playwright/test';

test('conversion pages use public naming and canonical routes', async ({ page }) => {
  await page.goto('/tools');

  await expect(page.getByRole('link', { name: 'PDF to Word' })).toHaveAttribute('href', '/pdf-to-word');
  await expect(page.getByRole('link', { name: 'Word to PDF' })).toHaveAttribute('href', '/word-to-pdf');

  const toolsText = await page.locator('main').innerText();
  expect(toolsText).not.toContain('PDF to Word (DOCX)');
  expect(toolsText).not.toContain('Word (DOCX) to PDF');

  await page.goto('/docx-to-pdf');
  await expect(page).toHaveURL(/\/word-to-pdf$/);

  await page.goto('/pdf-to-docx');
  await expect(page).toHaveURL(/\/pdf-to-word$/);
});
