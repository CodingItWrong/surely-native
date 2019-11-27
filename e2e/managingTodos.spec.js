describe('managing todos', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('allows managing todos', async () => {
    const todoName = 'My First Todo';
    const todoToDelete = 'Todo To Delete';

    await logIn();
    await addTodo(todoName);
    await completeTodo(todoName);
    await addAndDeleteTodo(todoToDelete);
  });

  async function logIn() {
    await element(by.id('Email field')).typeText('example@example.com');
    await element(by.id('Password field')).typeText('password');
    await element(by.id('Sign In button')).tap();
  }

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

  async function addAndDeleteTodo(todoName) {
    await element(by.id('New Todo Name field')).typeText(todoName);
    await element(by.id('Save Todo button')).tap();
    await element(by.id(`Delete todo ${todoName} button`)).tap();
    await expect(element(by.text(todoName))).toBeNotVisible();
  }
});
