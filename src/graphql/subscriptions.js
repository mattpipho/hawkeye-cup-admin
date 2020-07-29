/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConfiguration = /* GraphQL */ `
  subscription OnCreateConfiguration {
    onCreateConfiguration {
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
export const onUpdateConfiguration = /* GraphQL */ `
  subscription OnUpdateConfiguration {
    onUpdateConfiguration {
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
export const onDeleteConfiguration = /* GraphQL */ `
  subscription OnDeleteConfiguration {
    onDeleteConfiguration {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateHole = /* GraphQL */ `
  subscription OnCreateHole {
    onCreateHole {
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
export const onUpdateHole = /* GraphQL */ `
  subscription OnUpdateHole {
    onUpdateHole {
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
export const onDeleteHole = /* GraphQL */ `
  subscription OnDeleteHole {
    onDeleteHole {
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
export const onCreateGolfer = /* GraphQL */ `
  subscription OnCreateGolfer {
    onCreateGolfer {
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
export const onUpdateGolfer = /* GraphQL */ `
  subscription OnUpdateGolfer {
    onUpdateGolfer {
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
export const onDeleteGolfer = /* GraphQL */ `
  subscription OnDeleteGolfer {
    onDeleteGolfer {
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
export const onCreateGolferRound = /* GraphQL */ `
  subscription OnCreateGolferRound {
    onCreateGolferRound {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGolferRound = /* GraphQL */ `
  subscription OnUpdateGolferRound {
    onUpdateGolferRound {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGolferRound = /* GraphQL */ `
  subscription OnDeleteGolferRound {
    onDeleteGolferRound {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound {
    onCreateRound {
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
export const onUpdateRound = /* GraphQL */ `
  subscription OnUpdateRound {
    onUpdateRound {
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
export const onDeleteRound = /* GraphQL */ `
  subscription OnDeleteRound {
    onDeleteRound {
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
export const onCreateScore = /* GraphQL */ `
  subscription OnCreateScore {
    onCreateScore {
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
export const onUpdateScore = /* GraphQL */ `
  subscription OnUpdateScore {
    onUpdateScore {
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
export const onDeleteScore = /* GraphQL */ `
  subscription OnDeleteScore {
    onDeleteScore {
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
export const onCreateTeeTimeGolfer = /* GraphQL */ `
  subscription OnCreateTeeTimeGolfer {
    onCreateTeeTimeGolfer {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeeTimeGolfer = /* GraphQL */ `
  subscription OnUpdateTeeTimeGolfer {
    onUpdateTeeTimeGolfer {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeeTimeGolfer = /* GraphQL */ `
  subscription OnDeleteTeeTimeGolfer {
    onDeleteTeeTimeGolfer {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTeeTime = /* GraphQL */ `
  subscription OnCreateTeeTime {
    onCreateTeeTime {
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
export const onUpdateTeeTime = /* GraphQL */ `
  subscription OnUpdateTeeTime {
    onUpdateTeeTime {
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
export const onDeleteTeeTime = /* GraphQL */ `
  subscription OnDeleteTeeTime {
    onDeleteTeeTime {
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
