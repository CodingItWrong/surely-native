describe('managing todos', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('allows managing todos', async () => {
    const todoName = 'My First Todo';

    await addTodo(todoName);
    await completeTodo(todoName);
  });

  async function addTodo(todoName) {
    await element(by.id('New Todo Name field')).typeText(todoName);
    await element(by.id('Save Todo button')).tap();

    await expect(element(by.id('New Todo Name field'))).toHaveText('');
    await expect(element(by.text(todoName))).toBeVisible();
  }

  async function completeTodo(todoName) {
    await element(by.id(`Complete todo ${todoName} button`)).tap();
    await expect(element(by.text(todoName))).toBeNotVisible();
  }
});
