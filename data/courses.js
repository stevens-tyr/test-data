const { courseIDs, assignmentIDs } = require('./IDs');

module.exports = [
    {
        "_id": courseIDs[0],
        "department": "CS",
        "number": 101,
        "section": "A",
        "professors": [2],
        "assistants": [3],
        "students": [1],
        "assignments": [
            assignmentIDs[0],
            assignmentIDs[1]
        ]
    },
    {
        "_id": courseIDs[1],
        "department": "CS",
        "number": 102,
        "section": "A",
        "professors": [2],
        "assistants": [3],
        "students": [1],
        "assignments": [
            assignmentIDs[2],
            assignmentIDs[3]
        ]
    },
    {
        "_id": courseIDs[2],
        "department": "CS",
        "number": 103,
        "section": "A",
        "professors": [2],
        "assistants": [3],
        "students": [1],
        "assignments": [
            assignmentIDs[4],
            assignmentIDs[5]
        ]
    }
]