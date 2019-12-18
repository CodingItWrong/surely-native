import {Schema} from '@orbit/data';

const schema = new Schema({
  models: {
    todo: {
      attributes: {
        name: {type: 'string'},
        createdAt: {type: 'date-time'},
        completedAt: {type: 'date-time'},
        deletedAt: {type: 'date-time'},
      },
    },
  },
});

export default schema;
