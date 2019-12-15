import {useState, useEffect, useCallback} from 'react';

const useOrbitQuery = ({storeReady, store, query}) => {
  const [records, setRecords] = useState([]);

  const refresh = useCallback(() => store.query(query), [store, query]);

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
