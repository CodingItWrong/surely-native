import {useState, useEffect} from 'react';

const useOrbitQuery = ({storeReady, store, query}) => {
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

const QueryContainer = ({storeReady, store, query, render}) => {
  const records = useOrbitQuery({storeReady, store, query});

  return render({records});
};

export default QueryContainer;
