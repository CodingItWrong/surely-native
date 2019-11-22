import {Schema} from '@orbit/data';

const schema = new Schema({
  models: {
    todos: {
      attributes: {
        name: {type: 'string'},
      },
    },
  },
});

export default schema;
