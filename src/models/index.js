// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Configuration, Course, Hole, Golfer, GolferRound, Round, Score, TeeTime, TeeTimeGolfer } = initSchema(schema);

export {
  Configuration,
  Course,
  Hole,
  Golfer,
  GolferRound,
  Round,
  Score,
  TeeTime,
  TeeTimeGolfer
};