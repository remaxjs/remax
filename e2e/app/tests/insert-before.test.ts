import { describeWithMini, goTo } from './helpers';

const checkInitialState = () => {
  const a = document.getElementById('a')!;
  const c2 = document.getElementById('c2')!;

  // 初始只有 a 和 c
  if (a.previousElementSibling) {
    return 1;
  }

  if (!a.nextElementSibling || a.nextElementSibling.id !== 'c') {
    return 2;
  }

  if (!a.nextElementSibling || a.nextElementSibling.nextElementSibling) {
    return 3;
  }

  // 初始只有 c2
  if (c2.previousElementSibling) {
    return 4;
  }

  if (c2.nextElementSibling) {
    return 5;
  }

  return 0;
};

describeWithMini('insert before', () => {
  it('正常 insert before 和删除', async () => {
    const app = await goTo('/pages/insert-before/index');
    await app.waitFor('.page');
    let expected = await app.evaluate(checkInitialState);

    expect(expected).toBe(0);

    const toggleB = await app.waitForSelector('#toggle-b');
    const toggleB2 = await app.waitForSelector('#toggle-b2');
    await toggleB.click();
    await toggleB2.click();
    await app.waitFor(200);

    expected = await app.evaluate(() => {
      const a = document.getElementById('a')!;
      const c2 = document.getElementById('c2')!;

      // toggle 后按顺序显示 a b c
      if (a.previousElementSibling) {
        return 1;
      }

      if (!a.nextElementSibling || a.nextElementSibling.id !== 'b') {
        return 2;
      }

      if (
        !a.nextElementSibling ||
        !a.nextElementSibling.nextElementSibling ||
        a.nextElementSibling.nextElementSibling.id !== 'c'
      ) {
        return 3;
      }

      // toggle 后按顺序显示 b2, c2
      if (!c2.previousElementSibling || c2.previousElementSibling.id !== 'b2') {
        return 4;
      }

      if (c2.previousElementSibling && c2.previousElementSibling.previousElementSibling) {
        return 5;
      }

      if (c2.nextElementSibling) {
        return 6;
      }

      return 0;
    });

    expect(expected).toBe(0);

    // 再把元素删掉
    await toggleB.click();
    await toggleB2.click();
    await app.waitFor(200);

    expected = await app.evaluate(checkInitialState);
    expect(expected).toBe(0);
  });
});
