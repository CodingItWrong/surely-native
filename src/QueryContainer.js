import {useState, useEffect} from 'react';
import store from './store';

// A render-prop component that runs a query and passes the results to the render prop.
// Also passes an updateStore function that, when run, will rerun the query from the cache.
const QueryContainer = ({query, render}) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    store.query(query);

    store.on('transform', t => {
      const result = store.cache.query(query);
      setRecords(result);
    });
  }, [query]);

  const updateStore = (...args) => store.update(...args);

  return render({records, updateStore});
};

export default QueryContainer;
