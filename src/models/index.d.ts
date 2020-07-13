import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Course {
  readonly id: string;
  readonly name: string;
  readonly shortName?: string;
  readonly holes?: Hole[];
  constructor(init: ModelInit<Course>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

export declare class Hole {
  readonly id: string;
  readonly number: number;
  readonly par: number;
  readonly handicap?: number;
  readonly yardage?: number;
  readonly course?: Course;
  constructor(init: ModelInit<Hole>);
  static copyOf(source: Hole, mutator: (draft: MutableModel<Hole>) => MutableModel<Hole> | void): Hole;
}