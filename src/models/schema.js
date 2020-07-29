export const schema = {
    "models": {
        "Configuration": {
            "name": "Configuration",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Configurations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Course": {
            "name": "Course",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "shortName": {
                    "name": "shortName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "holes": {
                    "name": "holes",
                    "isArray": true,
                    "type": {
                        "model": "Hole"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "course"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Courses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Hole": {
            "name": "Hole",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "number": {
                    "name": "number",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "par": {
                    "name": "par",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "handicap": {
                    "name": "handicap",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "yardage": {
                    "name": "yardage",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "course": {
                    "name": "course",
                    "isArray": false,
                    "type": {
                        "model": "Course"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "courseID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Holes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCourse",
                        "fields": [
                            "courseID"
                        ]
                    }
                }
            ]
        },
        "Golfer": {
            "name": "Golfer",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "team": {
                    "name": "team",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "handicap": {
                    "name": "handicap",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "rounds": {
                    "name": "rounds",
                    "isArray": true,
                    "type": {
                        "model": "GolferRound"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "golfer"
                    }
                },
                "scores": {
                    "name": "scores",
                    "isArray": true,
                    "type": {
                        "model": "Score"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "golfer"
                    }
                },
                "teeTimes": {
                    "name": "teeTimes",
                    "isArray": true,
                    "type": {
                        "model": "TeeTimeGolfer"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "golfer"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Golfers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "GolferRound": {
            "name": "GolferRound",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "golfer": {
                    "name": "golfer",
                    "isArray": false,
                    "type": {
                        "model": "Golfer"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "golferID"
                    }
                },
                "round": {
                    "name": "round",
                    "isArray": false,
                    "type": {
                        "model": "Round"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "roundID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "GolferRounds",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byGolfer",
                        "fields": [
                            "golferID",
                            "roundID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRound",
                        "fields": [
                            "roundID",
                            "golferID"
                        ]
                    }
                }
            ]
        },
        "Round": {
            "name": "Round",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "course": {
                    "name": "course",
                    "isArray": false,
                    "type": {
                        "model": "Course"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "courseID"
                    }
                },
                "golfers": {
                    "name": "golfers",
                    "isArray": true,
                    "type": {
                        "model": "GolferRound"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "round"
                    }
                },
                "scores": {
                    "name": "scores",
                    "isArray": true,
                    "type": {
                        "model": "Score"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "round"
                    }
                },
                "teeTimes": {
                    "name": "teeTimes",
                    "isArray": true,
                    "type": {
                        "model": "TeeTime"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "round"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Rounds",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCourse",
                        "fields": [
                            "courseID"
                        ]
                    }
                }
            ]
        },
        "Score": {
            "name": "Score",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "golfer": {
                    "name": "golfer",
                    "isArray": false,
                    "type": {
                        "model": "Golfer"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "golferID"
                    }
                },
                "round": {
                    "name": "round",
                    "isArray": false,
                    "type": {
                        "model": "Round"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "roundID"
                    }
                },
                "holeID": {
                    "name": "holeID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "hole": {
                    "name": "hole",
                    "isArray": false,
                    "type": {
                        "model": "Hole"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id"
                    }
                },
                "score": {
                    "name": "score",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Scores",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byGolferScore",
                        "fields": [
                            "golferID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRoundScore",
                        "fields": [
                            "roundID"
                        ]
                    }
                }
            ]
        },
        "TeeTime": {
            "name": "TeeTime",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "round": {
                    "name": "round",
                    "isArray": false,
                    "type": {
                        "model": "Round"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "roundID"
                    }
                },
                "golfers": {
                    "name": "golfers",
                    "isArray": true,
                    "type": {
                        "model": "TeeTimeGolfer"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "teeTime"
                    }
                }
            },
            "syncable": true,
            "pluralName": "TeeTimes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTeeTimeRound",
                        "fields": [
                            "roundID"
                        ]
                    }
                }
            ]
        },
        "TeeTimeGolfer": {
            "name": "TeeTimeGolfer",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "golfer": {
                    "name": "golfer",
                    "isArray": false,
                    "type": {
                        "model": "Golfer"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "golferID"
                    }
                },
                "teeTime": {
                    "name": "teeTime",
                    "isArray": false,
                    "type": {
                        "model": "TeeTime"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "teeTimeID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "TeeTimeGolfers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byGolferTT",
                        "fields": [
                            "golferID",
                            "teeTimeID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byGolfer",
                        "fields": [
                            "golferID",
                            "teeTimeID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTeeTime",
                        "fields": [
                            "teeTimeID",
                            "golferID"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "4b0f03ba4b6f2a7b28306047dc4179ff"
};