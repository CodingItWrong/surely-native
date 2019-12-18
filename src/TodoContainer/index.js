import React from 'react';
import useOrbitQuery from '../useOrbitQuery';
import store from '../store';

const TodoContainer = ({todos, refresh, render}) => {
  const handleRefresh = refresh;

  const handleAdd = name =>
    store.update(t =>
      t.addRecord({
        type: 'todo',
        attributes: {name},
      }),
    );

  const handleComplete = todo =>
    store.update(t =>
      t.updateRecord({
        ...todo,
        attributes: {
          ...todo.attributes,
          completedAt: new Date(),
        },
      }),
    );

  const handleDelete = todo =>
    store.update(t =>
      t.updateRecord({
        ...todo,
        attributes: {
          ...todo.attributes,
          deletedAt: new Date(),
        },
      }),
    );

  const activeTodos = todos.filter(
    ({attributes}) => !attributes.completedAt && !attributes.deletedAt,
  );

  return render({
    todos: activeTodos,
    handleRefresh,
    handleAdd,
    handleComplete,
    handleDelete,
  });
};

const query = q => q.findRecords('todo').sort('name');
const storeReady = () => Promise.resolve();

const ConnectedTodoContainer = ({render}) => {
  const [records, refresh] = useOrbitQuery({store, storeReady, query});

  return <TodoContainer todos={records} refresh={refresh} render={render} />;
};

export default ConnectedTodoContainer;
