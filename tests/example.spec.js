// @ts-check
import { test, expect, chromium } from '@playwright/test';


test('testar visibilidade', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/certificacao');
  await page.locator('#ipflcg').isVisible();
  await page.getByRole('link', { name: 'Quero me certificar' }).nth(1).isVisible();
  await page.getByText('Curso: Molestie semper mi Saiba Curso: Molestie semper mi Saiba maisCurso:').isVisible();
  await page.locator('#ipeqef').isVisible();
  await page.getByRole('img').nth(1).isVisible();
  await page.locator('#icwx8').isVisible();
  await page.locator('div').filter({ hasText: 'Curso: Molestie semper mi' }).nth(3).isVisible();
  await page.locator('#izfqxf').isVisible();
  await page.locator('#i6n18x').isVisible();

});


test('avançar candidatura', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/certificacao');
  await page.locator('input[name="pessoa.nome"]').click();
  await page.locator('input[name="pessoa.nome"]').fill('nome teste');
  await page.getByPlaceholder('(11) 96123-').click();
  await page.getByPlaceholder('(11) 96123-').fill('11 96123-4567');
  await page.getByPlaceholder('email@exemplo.com').click();
  await page.getByPlaceholder('email@exemplo.com').fill('email@exemplo.com');
  await page.getByText('NomeTelefone Brazil +').click();
  await page.getByRole('button', { name: 'Avançar' }).isVisible();
  await page.getByRole('button', { name: 'Avançar' }).click();
  await page.locator('#toast-container div').filter({ hasText: 'É necessário informar a base' }).isVisible();
});

test('testar candidatura primeiro link', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/certificacao');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#iwgqid').getByRole('link', { name: 'Quero me certificar' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://rubeus.com.br/')
});

test('testar candidatura segundo link', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/certificacao');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#iwgqid').getByRole('link', { name: 'Quero me certificar' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://rubeus.com.br/')
});


test('Checar facebook', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/certificacao');
  await page.locator('#iy2fe4').isVisible();
  await page.locator('#iy2fe4').click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://www.facebook.com/CanalRubeus')
});

test('Checar linkedin', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/certificacao');
  await page.locator('#i2m2tn').isVisible();
  await page.locator('#i2m2tn').click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://www.linkedin.com/company/rubeus/')
});

test('Checar instagram', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/certificacao');
  await page.locator('#il7i3x').isVisible();
  await page.locator('#il7i3x').click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://www.instagram.com/canalrubeus/')
});

test('Checar youtube', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/certificacao');
  await page.locator('#ifpwp7').isVisible();
  await page.locator('#ifpwp7').click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://www.tiktok.com/@rubeusoficial')
});

