import {useState, useEffect, useCallback} from 'react';

const removeCachedRecordsForQuery = ({store, query}) => {
  const records = store.cache.query(query);
  store.cache.patch(t => records.map(r => t.removeRecord(r)));
};

const useOrbitQuery = ({storeReady, store, query}) => {
  const [records, setRecords] = useState([]);

  const refresh = useCallback(() => {
    removeCachedRecordsForQuery({store, query});
    store.query(query);
  }, [store, query]);

  useEffect(() => {
    storeReady().then(() => {
      store.on('transform', () => {
        setRecords(store.cache.query(query));
      });
      store.query(query);
    });
  }, [storeReady, store, query, refresh]);

  return [records, refresh];
};

export default useOrbitQuery;
