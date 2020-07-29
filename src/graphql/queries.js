/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncConfigurations = /* GraphQL */ `
  query SyncConfigurations(
    $filter: ModelConfigurationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConfigurations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        key
        value
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getConfiguration = /* GraphQL */ `
  query GetConfiguration($id: ID!) {
    getConfiguration(id: $id) {
      id
      key
      value
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listConfigurations = /* GraphQL */ `
  query ListConfigurations(
    $filter: ModelConfigurationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigurations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        value
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        shortName
        holes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      name
      shortName
      holes {
        items {
          id
          number
          par
          handicap
          yardage
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        shortName
        holes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHoles = /* GraphQL */ `
  query SyncHoles(
    $filter: ModelHoleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHoles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        number
        par
        handicap
        yardage
        courseID
        course {
          id
          name
          shortName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHole = /* GraphQL */ `
  query GetHole($id: ID!) {
    getHole(id: $id) {
      id
      number
      par
      handicap
      yardage
      courseID
      course {
        id
        name
        shortName
        holes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listHoles = /* GraphQL */ `
  query ListHoles(
    $filter: ModelHoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        number
        par
        handicap
        yardage
        courseID
        course {
          id
          name
          shortName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGolfers = /* GraphQL */ `
  query SyncGolfers(
    $filter: ModelGolferFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGolfers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        firstName
        lastName
        team
        handicap
        rounds {
          nextToken
          startedAt
        }
        scores {
          nextToken
          startedAt
        }
        teeTimes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGolfer = /* GraphQL */ `
  query GetGolfer($id: ID!) {
    getGolfer(id: $id) {
      id
      email
      firstName
      lastName
      team
      handicap
      rounds {
        items {
          id
          golferID
          roundID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      scores {
        items {
          id
          golferID
          roundID
          holeID
          teeTimeID
          score
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      teeTimes {
        items {
          id
          golferID
          teeTimeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listGolfers = /* GraphQL */ `
  query ListGolfers(
    $filter: ModelGolferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGolfers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        team
        handicap
        rounds {
          nextToken
          startedAt
        }
        scores {
          nextToken
          startedAt
        }
        teeTimes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGolferRounds = /* GraphQL */ `
  query SyncGolferRounds(
    $filter: ModelGolferRoundFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGolferRounds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        golferID
        roundID
        golfer {
          id
          email
          firstName
          lastName
          team
          handicap
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        round {
          id
          name
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRounds = /* GraphQL */ `
  query SyncRounds(
    $filter: ModelRoundFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRounds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        courseID
        course {
          id
          name
          shortName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        golfers {
          nextToken
          startedAt
        }
        scores {
          nextToken
          startedAt
        }
        teeTimes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRound = /* GraphQL */ `
  query GetRound($id: ID!) {
    getRound(id: $id) {
      id
      name
      courseID
      course {
        id
        name
        shortName
        holes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      golfers {
        items {
          id
          golferID
          roundID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      scores {
        items {
          id
          golferID
          roundID
          holeID
          teeTimeID
          score
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      teeTimes {
        items {
          id
          name
          roundID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listRounds = /* GraphQL */ `
  query ListRounds(
    $filter: ModelRoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        courseID
        course {
          id
          name
          shortName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        golfers {
          nextToken
          startedAt
        }
        scores {
          nextToken
          startedAt
        }
        teeTimes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncScores = /* GraphQL */ `
  query SyncScores(
    $filter: ModelScoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncScores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        golferID
        golfer {
          id
          email
          firstName
          lastName
          team
          handicap
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        roundID
        round {
          id
          name
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        holeID
        hole {
          id
          number
          par
          handicap
          yardage
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        teeTimeID
        teeTime {
          id
          name
          roundID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        score
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getScore = /* GraphQL */ `
  query GetScore($id: ID!) {
    getScore(id: $id) {
      id
      golferID
      golfer {
        id
        email
        firstName
        lastName
        team
        handicap
        rounds {
          nextToken
          startedAt
        }
        scores {
          nextToken
          startedAt
        }
        teeTimes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      roundID
      round {
        id
        name
        courseID
        course {
          id
          name
          shortName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        golfers {
          nextToken
          startedAt
        }
        scores {
          nextToken
          startedAt
        }
        teeTimes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      holeID
      hole {
        id
        number
        par
        handicap
        yardage
        courseID
        course {
          id
          name
          shortName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      teeTimeID
      teeTime {
        id
        name
        roundID
        round {
          id
          name
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        golfers {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      score
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listScores = /* GraphQL */ `
  query ListScores(
    $filter: ModelScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        golferID
        golfer {
          id
          email
          firstName
          lastName
          team
          handicap
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        roundID
        round {
          id
          name
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        holeID
        hole {
          id
          number
          par
          handicap
          yardage
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        teeTimeID
        teeTime {
          id
          name
          roundID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        score
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeeTimeGolfers = /* GraphQL */ `
  query SyncTeeTimeGolfers(
    $filter: ModelTeeTimeGolferFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeeTimeGolfers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        golferID
        teeTimeID
        golfer {
          id
          email
          firstName
          lastName
          team
          handicap
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        teeTime {
          id
          name
          roundID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeeTimes = /* GraphQL */ `
  query SyncTeeTimes(
    $filter: ModelTeeTimeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeeTimes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        roundID
        round {
          id
          name
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        golfers {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeeTime = /* GraphQL */ `
  query GetTeeTime($id: ID!) {
    getTeeTime(id: $id) {
      id
      name
      roundID
      round {
        id
        name
        courseID
        course {
          id
          name
          shortName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        golfers {
          nextToken
          startedAt
        }
        scores {
          nextToken
          startedAt
        }
        teeTimes {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      golfers {
        items {
          id
          golferID
          teeTimeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTeeTimes = /* GraphQL */ `
  query ListTeeTimes(
    $filter: ModelTeeTimeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeeTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        roundID
        round {
          id
          name
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        golfers {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const scoresByTeeTime = /* GraphQL */ `
  query ScoresByTeeTime(
    $teeTimeID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    scoresByTeeTime(
      teeTimeID: $teeTimeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        golferID
        golfer {
          id
          email
          firstName
          lastName
          team
          handicap
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        roundID
        round {
          id
          name
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        holeID
        hole {
          id
          number
          par
          handicap
          yardage
          courseID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        teeTimeID
        teeTime {
          id
          name
          roundID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        score
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
