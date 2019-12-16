import {useState, useEffect, useCallback} from 'react';

const useOrbitQuery = ({storeReady, store, query}) => {
  const [records, setRecords] = useState([]);

  const refresh = useCallback(() => {
    // this is model specific and needs to be removed
    const allRecords = store.cache.query(q => q.findRecords('todo'));
    store.cache.patch(t => allRecords.map(r => t.removeRecord(r)));
    store.query(query);
  }, [store, query]);

  useEffect(() => {
    storeReady().then(() => {
      store.on('transform', () => {
        setRecords(store.cache.query(query));
      });
      refresh();
    });
  }, [storeReady, store, query, refresh]);

  return [records, refresh];
};

export default useOrbitQuery;
