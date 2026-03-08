import { test, expect } from '@playwright/test';


test('carregar página', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/site');
  await page.locator('#i9nay').isVisible();
  await page.getByText('NOSSOS DIFERENCIAIS EVENTOSDEPOIMENTOS FALAR COM CONSULTOR').isVisible();
  await page.locator('#iwhtfk').isVisible();
  await page.locator('#inrj09').isVisible();
  await page.locator('#iwzak9').isVisible();
  await page.locator('#i7bz5j').isVisible();
  await page.getByText('CONHEÇA NOSSOS DIFERENCIAISConfira abaixo os motivos que tornam a UNIEXEMPLO a').isVisible();
  await page.locator('#iqdv').isVisible();
  await page.getByText('O QUE NOSSOS ALUNOS DIZEM?Lorem ipsum dolor sit amet, consectetur adipiscing').isVisible();
  await page.getByText('Conheça nossapágina no Linkedin Curta a UNIEXEMPLOno FacebookSiga nosso perfil').isVisible();
  await page.locator('div').filter({ hasText: 'EndereçoRua Lorem ipsum, 333' }).nth(1).isVisible();
});

test('testar entradas faculdade', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/site');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#igmiox').isVisible()
  await page.locator('#igmiox').click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://rubeus.com.br/sobre-a-rubeus/')
  await page1.close()
  const page2Promise = page.waitForEvent('popup');
  await page.locator('#ihimt7').isVisible()
  await page.locator('#ihimt7').click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL('https://cursos.rubeus.com.br/analista-rubeus/')
  await page2.close()
  const page3Promise = page.waitForEvent('popup');
  await page.locator('#iv4nx6').isVisible()
  await page.locator('#iv4nx6').click();
  const page3 = await page3Promise;
  await expect(page3).toHaveURL('https://rubeus.com.br/cases-de-sucesso/')
  await page3.close()
  const page4Promise = page.waitForEvent('popup');
  await page.locator('#iopirr').isVisible()
  await page.locator('#iopirr').click();
  const page4 = await page4Promise;
  await expect(page4).toHaveURL('https://web.whatsapp.com/')
  await page4.close()
});

test('testar links cabeçalho', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/site');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#ipkda').isVisible()
  await page.locator('#ipkda').click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://web.whatsapp.com/')
  await page1.close()
  const page2Promise = page.waitForEvent('popup');
  await page.locator('#iks3g').isVisible()
  await page.locator('#iks3g').click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL('https://web.whatsapp.com/')
  await page2.close()
  const page3Promise = page.waitForEvent('popup');
  await page.locator('#iuowq').isVisible()
  await page.locator('#iuowq').click();
  const page3 = await page3Promise;
  await expect(page3).toHaveURL('https://www.linkedin.com/company/rubeus/')
  await page3.close()
  const page4Promise = page.waitForEvent('popup');
  await page.locator('#i5aau').isVisible()
  await page.locator('#i5aau').click();
  const page4 = await page4Promise;
  await expect(page4).toHaveURL('https://www.facebook.com/CanalRubeus')
  await page4.close()
  const page5Promise = page.waitForEvent('popup');
  await page.locator('#icstg').isVisible()
  await page.locator('#icstg').click();
  const page5 = await page5Promise;
  await expect(page5).toHaveURL('https://x.com/CanalRubeus')
  await page5.close()
  const page6Promise = page.waitForEvent('popup');
  await page.locator('#in0ql').isVisible()
  await page.locator('#in0ql').click();
  const page6 = await page6Promise;
  await expect(page6).toHaveURL('https://www.youtube.com/@Rubeus')
  await page6.close()
  const page7Promise = page.waitForEvent('popup');
  await page.locator('#i5rqa').isVisible()
  await page.locator('#i5rqa').click();
  const page7 = await page7Promise;
  await expect(page7).toHaveURL('https://www.instagram.com/canalrubeus/')
  await page7.close()
  const page8Promise = page.waitForEvent('popup');
  await page.locator('#i9dyl').isVisible()
  await page.locator('#i9dyl').click();
  const page8 = await page8Promise;
  await expect(page8).toHaveURL('https://rubeus.com.br/')
  await page8.close()
  const page9Promise = page.waitForEvent('popup');
  await page.locator('#ier16').isVisible()
  await page.locator('#ier16').click();
  const page9 = await page9Promise;
  await expect(page9).toHaveURL('https://crmrubeus.zendesk.com/hc/pt-br')
  await page9.close()
});

test('testar links eventos', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/site');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#i6b9dk').isVisible()
  await page.locator('#i6b9dk').click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://cursos.rubeus.com.br/analista-rubeus/')
  await page1.close()
  const page2Promise = page.waitForEvent('popup');
  await page.locator('#iwmzne').isVisible()
  await page.locator('#iwmzne').click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL('https://cursos.rubeus.com.br/analista-rubeus/')
  await page2.close()
  const page3Promise = page.waitForEvent('popup');
  await page.locator('#izq1hh').isVisible()
  await page.locator('#izq1hh').click();
  const page3 = await page3Promise;
  await expect(page3).toHaveURL('https://cursos.rubeus.com.br/analista-rubeus/')
  await page3.close()
  const page4Promise = page.waitForEvent('popup');
  await page.locator('#itzwfq').isVisible()
  await page.locator('#itzwfq').click();
  const page4 = await page4Promise;
  await expect(page4).toHaveURL('https://cursos.rubeus.com.br/analista-rubeus/')
  await page4.close()
});

test('testar login', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/site');
  await page.locator('input[name="pessoa.nome"]').click();
  await page.locator('input[name="pessoa.nome"]').fill('Rodrigo');
  await page.locator('input[name="pessoa.nome"]').press('Tab');
  await page.getByPlaceholder('email@exemplo.com').fill('email@exemplo.com');
  await page.getByPlaceholder('(11) 96123-').click();
  await page.getByPlaceholder('(11) 96123-').fill('11 99123-456');
  await page.getByRole('button', { name: 'Concluir' }).click();
  await page.locator('#toast-container div').filter({ hasText: 'É necessário informar a base' }).click();
});

test('Redes Sociais Uniexemplo', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/site');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#iowxol').isVisible()
  await page.locator('#iowxol').click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://www.linkedin.com/company/rubeus/')
  await page1.close()
  const page2Promise = page.waitForEvent('popup');
  await page.locator('#iv4sbv').isVisible()
  await page.locator('#iv4sbv').click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL('https://www.facebook.com/CanalRubeus')
  await page2.close()
  const page3Promise = page.waitForEvent('popup');
  await page.locator('#in1aw2').isVisible()
  await page.locator('#in1aw2').click();
  const page3 = await page3Promise;
  await expect(page3).toHaveURL('https://x.com/CanalRubeus')
  await page3.close()
  const page4Promise = page.waitForEvent('popup');
  await page.locator('#ibg9i8').isVisible()
  await page.locator('#ibg9i8').click();
  const page4 = await page4Promise;
  await expect(page4).toHaveURL('https://www.youtube.com/@Rubeus')
  await page4.close()
  const page5Promise = page.waitForEvent('popup');
  await page.locator('#iyoebg').isVisible()
  await page.locator('#iyoebg').click();
  const page5 = await page5Promise;
  await expect(page5).toHaveURL('https://www.instagram.com/canalrubeus/')
  await page5.close()
});

test('canto inferior direito Uniexemplo social', async ({ page }) => {
  await page.goto('https://qualidade.apprbs.com.br/site');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#ivmnr9').isVisible()
  await page.locator('#ivmnr9').click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://www.facebook.com/CanalRubeus')
  await page1.close()
  const page2Promise = page.waitForEvent('popup');
  await page.locator('#ixax8x').isVisible()
  await page.locator('#ixax8x').click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL('https://www.linkedin.com/company/rubeus/')
  await page2.close()
  const page3Promise = page.waitForEvent('popup');
  await page.locator('#ic6rdi').isVisible()
  await page.locator('#ic6rdi').click();
  const page3 = await page3Promise;
  await expect(page3).toHaveURL('https://www.youtube.com/@Rubeus')
  await page3.close()
  const page4Promise = page.waitForEvent('popup');
  await page.locator('#ilnvjq').isVisible()
  await page.locator('#ilnvjq').click();
  const page4 = await page4Promise;
  await expect(page4).toHaveURL('https://www.instagram.com/canalrubeus/')
  await page4.close()
});