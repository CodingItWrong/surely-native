import {useState, useEffect} from 'react';
import store from './store';

// A render-prop component that runs a query and passes the results to the render prop.
// Also passes an updateStore function that, when run, will rerun the query.
const QueryContainer = ({query, render}) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    store.query(query).then(result => {
      setRecords(result);
    });

    store.on('transform', t => {
      console.log({t});
      // do not rerun when updated records from server
      if (t.operations.some(o => o.op !== 'updateRecord')) {
        const result = store.cache.query(query);
        setRecords(result);
      }
    });
  }, [query]);

  const updateStore = (...args) => store.update(...args);

  return render({records, updateStore});
};

export default QueryContainer;
