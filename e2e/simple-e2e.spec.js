import { expect, test } from '@playwright/test';

test('simplest E2E', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.getByTestId('info').click();
  await page.getByRole('link', { name: 'start!' }).click();
    await page.getByTestId('total-value').click();
      await expect(page.getByTestId('total-value')).toHaveText('0')
    await page.getByText('+').click();
    await expect(page.getByTestId('total-value')).toHaveText('1')
  await page.getByText('-').click();
  await expect(page.getByTestId('total-value')).toHaveText('0')
  await page.getByText('+').click();
  await expect(page.getByTestId('total-value')).toHaveText('1')
  await page.getByText('+').click();
  await expect(page.getByTestId('total-value')).toHaveText('2')
  await page.getByText('+').click();
  await expect(page.getByTestId('total-value')).toHaveText('3')
  await page.getByText('-').click();
  await expect(page.getByTestId('total-value')).toHaveText('2')
});