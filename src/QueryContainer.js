import {useState, useEffect} from 'react';

export const useOrbitQuery = ({storeReady, store, query}) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    storeReady().then(() => {
      store.on('transform', () => {
        setRecords(store.cache.query(query));
      });
      store.query(query);
    });
  }, [storeReady, store, query]);

  return records;
};
