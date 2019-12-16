import React from 'react';
import {Text} from 'react-native';
import {render, act} from 'react-native-testing-library';
import useOrbitQuery from '../useOrbitQuery';

describe('useOrbitQuery', () => {
  const TestQueryContainer = ({
    storeReady,
    store,
    query,
    render: renderProp,
  }) => {
    const [records] = useOrbitQuery({storeReady, store, query});

    return renderProp({records});
  };

  const storeRecords = [{foo: 'bar'}];

  let renderProp;
  let resolveStoreReady;
  let storeReadyPromise;
  let store;
  let transformHandler;
  let queryByText;

  const userQuery = () => 'user query function';
  const storeReady = () => storeReadyPromise;

  beforeEach(() => {
    transformHandler = null;
    resolveStoreReady = null;
    storeReadyPromise = new Promise(resolve => {
      resolveStoreReady = resolve;
    });
    renderProp = jest
      .fn()
      .mockName('renderProp')
      .mockReturnValue(<Text>render prop return</Text>);
    store = {
      query: jest.fn().mockName('store.query'),
      cache: {
        query: jest
          .fn()
          .mockName('store.cache.query')
          .mockReturnValue(storeRecords),
      },
      on: jest
        .fn((eventName, handler) => {
          transformHandler = handler;
        })
        .mockName('store.on'),
    };

    ({queryByText} = render(
      <TestQueryContainer
        storeReady={storeReady}
        store={store}
        query={userQuery}
        render={renderProp}
      />,
    ));
  });

  describe('when store is not ready', () => {
    it('does not run the passed-in query against the store', () => {
      expect(store.query).not.toHaveBeenCalled();
    });

    it('calls the render prop with an empty record set', () => {
      expect(renderProp).toHaveBeenCalledWith({records: []});
    });

    it('renders the result of the render prop', () => {
      expect(queryByText('render prop return')).not.toBeNull();
    });
  });

  describe('when store is ready', () => {
    it('runs the passed-in query against the store', () => {
      resolveStoreReady();

      return storeReadyPromise.then(() => {
        expect(store.query).toHaveBeenCalledWith(userQuery);
      });
    });
  });

  describe('when store query returns', () => {
    it('calls the render prop with the records from the store', () => {
      resolveStoreReady();

      return storeReadyPromise.then(() => {
        act(() => {
          transformHandler(); // simulate orbit executing a transform event
        });

        expect(store.on).toHaveBeenCalledWith('transform', expect.anything());
        expect(store.cache.query).toHaveBeenCalledWith(userQuery);
        expect(renderProp).toHaveBeenCalledWith({records: storeRecords});
      });
    });
  });
});
