// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Course, Hole } = initSchema(schema);

export {
  Course,
  Hole
};