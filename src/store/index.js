import MemorySource from '@orbit/store';
import schema from './schema';

const memory = new MemorySource({schema});

export default memory;
