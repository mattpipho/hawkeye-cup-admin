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
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
