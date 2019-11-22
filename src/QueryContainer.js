import {useState, useEffect} from 'react';

// A render-prop component that runs a query and passes the results to the render prop.
// Also passes an updateStore function that, when run, will rerun the query from the cache.
const QueryContainer = ({store, query, render}) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    store.query(query);

    store.on('transform', t => {
      const result = store.cache.query(query);
      setRecords(result);
    });
  }, [store, query]);

  return render({records});
};

export default QueryContainer;
