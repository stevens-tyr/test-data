const { assignmentIDs, courseIDs, userIDs } = require('./IDs');

module.exports = [
    {
        "_id": courseIDs[0],
        "department": "CS",
        "number": 101,
        "longName": "Intro to Computer Science",
        "section": "A",
        "semester": "19S",
        "professors": [
            userIDs[3],
        ],
        "assistants": [
            userIDs[4],
        ],
        "students": [
            userIDs[0],
            userIDs[1],
            userIDs[2],
        ],
        "assignments": [
            assignmentIDs[0],
            assignmentIDs[1]
        ]
    },
    {
        "_id": courseIDs[1],
        "department": "CS",
        "longName": "Discrete Structures",
        "number": 102,
        "section": "A",
        "semester": "19S",
        "professors": [
            userIDs[3],
        ],
        "assistants": [
            userIDs[4],
        ],
        "students": [
            userIDs[1],
            userIDs[2],
        ],
        "assignments": [
            assignmentIDs[2],
            assignmentIDs[3]
        ]
    },
    {
        "_id": courseIDs[2],
        "department": "CS",
        "number": 103,
        "longName": "Data Structures",
        "section": "A",
        "semester": "19S",
        "professors": [
            userIDs[3],
        ],
        "assistants": [
            userIDs[4],
        ],
        "students": [
            userIDs[0],
        ],
        "assignments": [
            assignmentIDs[4],
            assignmentIDs[5]
        ]
    }
]