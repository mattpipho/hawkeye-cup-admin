/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConfiguration = /* GraphQL */ `
  query GetConfiguration($id: ID!) {
    getConfiguration(id: $id) {
      id
      key
      value
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
        createdAt
        updatedAt
      }
      nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        createdAt
        updatedAt
      }
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      scores {
        items {
          id
          golferID
          roundID
          holeID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
      teeTimes {
        items {
          id
          golferID
          teeTimeID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        }
        scores {
          nextToken
        }
        teeTimes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        createdAt
        updatedAt
      }
      golfers {
        items {
          id
          golferID
          roundID
          createdAt
          updatedAt
        }
        nextToken
      }
      scores {
        items {
          id
          golferID
          roundID
          holeID
          score
          createdAt
          updatedAt
        }
        nextToken
      }
      teeTimes {
        items {
          id
          name
          roundID
          createdAt
          updatedAt
        }
        nextToken
      }
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
          createdAt
          updatedAt
        }
        golfers {
          nextToken
        }
        scores {
          nextToken
        }
        teeTimes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        scores {
          nextToken
        }
        teeTimes {
          nextToken
        }
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
          createdAt
          updatedAt
        }
        golfers {
          nextToken
        }
        scores {
          nextToken
        }
        teeTimes {
          nextToken
        }
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      score
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
          createdAt
          updatedAt
        }
        roundID
        round {
          id
          name
          courseID
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
          createdAt
          updatedAt
        }
        score
        createdAt
        updatedAt
      }
      nextToken
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
          createdAt
          updatedAt
        }
        golfers {
          nextToken
        }
        scores {
          nextToken
        }
        teeTimes {
          nextToken
        }
        createdAt
        updatedAt
      }
      golfers {
        items {
          id
          golferID
          teeTimeID
          createdAt
          updatedAt
        }
        nextToken
      }
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
          createdAt
          updatedAt
        }
        golfers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
