import {useState, useCallback, useEffect} from 'react';
import uuid from 'uuid/v4';
import {getDb, getRemoteDb} from '../db';

const currentTimestamp = () => new Date().getTime();

const TodoContainer = ({render}) => {
  const [todos, setTodos] = useState([]);

  const updateDocs = useCallback(
    () =>
      getDb()
        .allDocs({include_docs: true})
        .then(result => result.rows.map(r => r.doc))
        .then(allTodos =>
          allTodos.filter(todo => !todo.completedAt && !todo.deletedAt),
        )
        .then(setTodos),
    [],
  );

  useEffect(() => {
    updateDocs();

    const remoteDb = getRemoteDb();
    if (remoteDb) {
      const syncHandler = getDb()
        .sync(getRemoteDb(), {live: true, retry: true})
        .on('change', updateDocs)
        .on('error', err => {
          console.error('sync error', err);
        });
      return () => syncHandler.cancel();
    }
  }, [updateDocs]);

  const handleAdd = name =>
    getDb()
      .put({_id: uuid(), name})
      .then(updateDocs);

  const handleComplete = todo =>
    getDb()
      .put({...todo, completedAt: currentTimestamp()})
      .then(updateDocs);

  const handleDelete = todo =>
    getDb()
      .remove(todo)
      .then(updateDocs);

  return render({
    todos,
    handleAdd,
    handleComplete,
    handleDelete,
  });
};

export default TodoContainer;
