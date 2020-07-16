/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConfiguration = /* GraphQL */ `
  mutation CreateConfiguration(
    $input: CreateConfigurationInput!
    $condition: ModelConfigurationConditionInput
  ) {
    createConfiguration(input: $input, condition: $condition) {
      key
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateConfiguration = /* GraphQL */ `
  mutation UpdateConfiguration(
    $input: UpdateConfigurationInput!
    $condition: ModelConfigurationConditionInput
  ) {
    updateConfiguration(input: $input, condition: $condition) {
      key
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteConfiguration = /* GraphQL */ `
  mutation DeleteConfiguration(
    $input: DeleteConfigurationInput!
    $condition: ModelConfigurationConditionInput
  ) {
    deleteConfiguration(input: $input, condition: $condition) {
      key
      value
      createdAt
      updatedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createHole = /* GraphQL */ `
  mutation CreateHole(
    $input: CreateHoleInput!
    $condition: ModelHoleConditionInput
  ) {
    createHole(input: $input, condition: $condition) {
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
export const updateHole = /* GraphQL */ `
  mutation UpdateHole(
    $input: UpdateHoleInput!
    $condition: ModelHoleConditionInput
  ) {
    updateHole(input: $input, condition: $condition) {
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
export const deleteHole = /* GraphQL */ `
  mutation DeleteHole(
    $input: DeleteHoleInput!
    $condition: ModelHoleConditionInput
  ) {
    deleteHole(input: $input, condition: $condition) {
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
export const createGolfer = /* GraphQL */ `
  mutation CreateGolfer(
    $input: CreateGolferInput!
    $condition: ModelGolferConditionInput
  ) {
    createGolfer(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateGolfer = /* GraphQL */ `
  mutation UpdateGolfer(
    $input: UpdateGolferInput!
    $condition: ModelGolferConditionInput
  ) {
    updateGolfer(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteGolfer = /* GraphQL */ `
  mutation DeleteGolfer(
    $input: DeleteGolferInput!
    $condition: ModelGolferConditionInput
  ) {
    deleteGolfer(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createGolferRound = /* GraphQL */ `
  mutation CreateGolferRound(
    $input: CreateGolferRoundInput!
    $condition: ModelGolferRoundConditionInput
  ) {
    createGolferRound(input: $input, condition: $condition) {
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
        rounds {
          nextToken
        }
        scores {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      createdAt
      updatedAt
    }
  }
`;
export const updateGolferRound = /* GraphQL */ `
  mutation UpdateGolferRound(
    $input: UpdateGolferRoundInput!
    $condition: ModelGolferRoundConditionInput
  ) {
    updateGolferRound(input: $input, condition: $condition) {
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
        rounds {
          nextToken
        }
        scores {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteGolferRound = /* GraphQL */ `
  mutation DeleteGolferRound(
    $input: DeleteGolferRoundInput!
    $condition: ModelGolferRoundConditionInput
  ) {
    deleteGolferRound(input: $input, condition: $condition) {
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
        rounds {
          nextToken
        }
        scores {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      createdAt
      updatedAt
    }
  }
`;
export const createRound = /* GraphQL */ `
  mutation CreateRound(
    $input: CreateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    createRound(input: $input, condition: $condition) {
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
export const updateRound = /* GraphQL */ `
  mutation UpdateRound(
    $input: UpdateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    updateRound(input: $input, condition: $condition) {
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
export const deleteRound = /* GraphQL */ `
  mutation DeleteRound(
    $input: DeleteRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    deleteRound(input: $input, condition: $condition) {
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
export const createScore = /* GraphQL */ `
  mutation CreateScore(
    $input: CreateScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    createScore(input: $input, condition: $condition) {
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
export const updateScore = /* GraphQL */ `
  mutation UpdateScore(
    $input: UpdateScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    updateScore(input: $input, condition: $condition) {
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
export const deleteScore = /* GraphQL */ `
  mutation DeleteScore(
    $input: DeleteScoreInput!
    $condition: ModelScoreConditionInput
  ) {
    deleteScore(input: $input, condition: $condition) {
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
export const createTeeTimeGolfer = /* GraphQL */ `
  mutation CreateTeeTimeGolfer(
    $input: CreateTeeTimeGolferInput!
    $condition: ModelTeeTimeGolferConditionInput
  ) {
    createTeeTimeGolfer(input: $input, condition: $condition) {
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
        rounds {
          nextToken
        }
        scores {
          nextToken
        }
        createdAt
        updatedAt
      }
      teeTime {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateTeeTimeGolfer = /* GraphQL */ `
  mutation UpdateTeeTimeGolfer(
    $input: UpdateTeeTimeGolferInput!
    $condition: ModelTeeTimeGolferConditionInput
  ) {
    updateTeeTimeGolfer(input: $input, condition: $condition) {
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
        rounds {
          nextToken
        }
        scores {
          nextToken
        }
        createdAt
        updatedAt
      }
      teeTime {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeeTimeGolfer = /* GraphQL */ `
  mutation DeleteTeeTimeGolfer(
    $input: DeleteTeeTimeGolferInput!
    $condition: ModelTeeTimeGolferConditionInput
  ) {
    deleteTeeTimeGolfer(input: $input, condition: $condition) {
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
        rounds {
          nextToken
        }
        scores {
          nextToken
        }
        createdAt
        updatedAt
      }
      teeTime {
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
      createdAt
      updatedAt
    }
  }
`;
export const createTeeTime = /* GraphQL */ `
  mutation CreateTeeTime(
    $input: CreateTeeTimeInput!
    $condition: ModelTeeTimeConditionInput
  ) {
    createTeeTime(input: $input, condition: $condition) {
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
export const updateTeeTime = /* GraphQL */ `
  mutation UpdateTeeTime(
    $input: UpdateTeeTimeInput!
    $condition: ModelTeeTimeConditionInput
  ) {
    updateTeeTime(input: $input, condition: $condition) {
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
export const deleteTeeTime = /* GraphQL */ `
  mutation DeleteTeeTime(
    $input: DeleteTeeTimeInput!
    $condition: ModelTeeTimeConditionInput
  ) {
    deleteTeeTime(input: $input, condition: $condition) {
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
