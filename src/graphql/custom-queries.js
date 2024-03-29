export const listCourses = /* GraphQL */ `
	query ListCoursesWithHoleInformatino(
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
					items {
						id
						number
						par
						handicap
					}
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
					items {
						id
						name
						golfers {
							items {
								id
								golfer {
									id
									lastName
									team
								}
								_deleted
							}
						}
					}
				}
				createdAt
				updatedAt
				_deleted
			}
			nextToken
		}
	}
`;
