import {useState, useEffect} from 'react';

const QueryContainer = ({storeReady, store, query, render}) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    storeReady().then(() => {
      store.on('transform', () => {
        setRecords(store.cache.query(query));
      });
      store.query(query);
    });
  }, [storeReady, store, query]);

  return render({records});
};

export default QueryContainer;
