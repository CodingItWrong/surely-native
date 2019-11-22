import {Schema} from '@orbit/data';

const schema = new Schema({
  models: {
    todo: {
      attributes: {
        name: {type: 'string'},
      },
    },
  },
});

export default schema;
