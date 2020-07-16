// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Course, Hole, Golfer, GolferRound, Round, Score, TeeTime, TeeTimeGolfer } = initSchema(schema);

export {
  Course,
  Hole,
  Golfer,
  GolferRound,
  Round,
  Score,
  TeeTime,
  TeeTimeGolfer
};