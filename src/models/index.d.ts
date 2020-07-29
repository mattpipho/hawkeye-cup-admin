import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Configuration {
  readonly id: string;
  readonly key: string;
  readonly value: string;
  constructor(init: ModelInit<Configuration>);
  static copyOf(source: Configuration, mutator: (draft: MutableModel<Configuration>) => MutableModel<Configuration> | void): Configuration;
}

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

export declare class Golfer {
  readonly id: string;
  readonly email: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly team?: string;
  readonly handicap?: number;
  readonly rounds?: GolferRound[];
  readonly scores?: Score[];
  readonly teeTimes?: TeeTimeGolfer[];
  constructor(init: ModelInit<Golfer>);
  static copyOf(source: Golfer, mutator: (draft: MutableModel<Golfer>) => MutableModel<Golfer> | void): Golfer;
}

export declare class GolferRound {
  readonly id: string;
  readonly golfer: Golfer;
  readonly round: Round;
  constructor(init: ModelInit<GolferRound>);
  static copyOf(source: GolferRound, mutator: (draft: MutableModel<GolferRound>) => MutableModel<GolferRound> | void): GolferRound;
}

export declare class Round {
  readonly id: string;
  readonly name: string;
  readonly course?: Course;
  readonly golfers?: GolferRound[];
  readonly scores?: Score[];
  readonly teeTimes?: TeeTime[];
  constructor(init: ModelInit<Round>);
  static copyOf(source: Round, mutator: (draft: MutableModel<Round>) => MutableModel<Round> | void): Round;
}

export declare class Score {
  readonly id: string;
  readonly golfer: Golfer;
  readonly round?: Round;
  readonly holeID: string;
  readonly hole?: Hole;
  readonly score: number;
  constructor(init: ModelInit<Score>);
  static copyOf(source: Score, mutator: (draft: MutableModel<Score>) => MutableModel<Score> | void): Score;
}

export declare class TeeTime {
  readonly id: string;
  readonly name?: string;
  readonly round?: Round;
  readonly golfers?: TeeTimeGolfer[];
  constructor(init: ModelInit<TeeTime>);
  static copyOf(source: TeeTime, mutator: (draft: MutableModel<TeeTime>) => MutableModel<TeeTime> | void): TeeTime;
}

export declare class TeeTimeGolfer {
  readonly id: string;
  readonly golfer: Golfer;
  readonly teeTime: TeeTime;
  constructor(init: ModelInit<TeeTimeGolfer>);
  static copyOf(source: TeeTimeGolfer, mutator: (draft: MutableModel<TeeTimeGolfer>) => MutableModel<TeeTimeGolfer> | void): TeeTimeGolfer;
}