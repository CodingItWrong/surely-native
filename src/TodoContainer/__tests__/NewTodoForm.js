import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import NewTodoForm from '../NewTodoForm';

describe('NewTodoForm', () => {
  describe('when filled', () => {
    let handleAdd;
    let getByTestId;

    const todoText = 'Todo Text';

    beforeEach(() => {
      handleAdd = jest.fn();

      ({getByTestId} = render(<NewTodoForm onAdd={handleAdd} />));

      fireEvent.changeText(getByTestId('New Todo Name field'), todoText);
      fireEvent.press(getByTestId('Save Todo button'));
    });

    it('calls onAdd with the todo text', () => {
      expect(handleAdd).toHaveBeenCalledWith(todoText);
    });

    it('clears the text field', () => {
      expect(getByTestId('New Todo Name field').props.value).toEqual('');
    });
  });

  describe('when empty', () => {
    it('does not call onAdd', () => {
      const handleAdd = jest.fn();

      const {getByTestId} = render(<NewTodoForm onAdd={handleAdd} />);

      fireEvent.press(getByTestId('Save Todo button'));

      expect(handleAdd).not.toHaveBeenCalled();
    });
  });
});
