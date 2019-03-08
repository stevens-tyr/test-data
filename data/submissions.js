const { assignmentIDs, userIDs, submissionIDs } = require('./IDs');

module.exports = [
    {
        "_id": submissionIDs[0],
        "userID": userIDs[0],
        "assignmentID":  assignmentIDs[0],
        "submissionDate": new Date("2018-12-10 00:00"),
        "attemptNumber": 1,
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     },
    {
        "_id": submissionIDs[1],
        "userIdD": userIDs[0],
        "assignmentID":  assignmentIDs[0],
        "submissionDate": new Date("2018-12-19 00:00"),
        "attemptNumber": 2,
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     },
    {
        "_id": submissionIDs[2],
        "userID": userIDs[1],
        "assignmentID":  assignmentIDs[1],
        "submissionDate": new Date("2018-12-10 00:00"),
        "attemptNumber": 1,
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     },
    {
        "_id": submissionIDs[3],
        "userID": userIDs[2],
        "assignmentID":  assignmentIDs[1],
        "attemptNumber": 1,
        "submissionDate": new Date("2018-12-19 00:00"),
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     },
    {
        "_id": submissionIDs[4],
        "userID": userIDs[1],
        "assignmentID":  assignmentIDs[2],
        "submissionDate": new Date("2018-12-10 00:00"),
        "attemptNumber": 1,
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     },
    {
        "_id": submissionIDs[5],
        "userID": userIDs[1],
        "assignmentID":  assignmentIDs[2],
        "submissionDate": new Date("2018-12-19 00:00"),
        "attemptNumber": 2,
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     },
    {
        "_id": submissionIDs[6],
        "userID": userIDs[2],
        "assignmentID":  assignmentIDs[3],
        "submissionDate": new Date("2018-12-10 00:00"),
        "attemptNumber": 1,
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     },
    {
        "_id": submissionIDs[7],
        "userID": userIDs[2],
        "assignmentID":  assignmentIDs[3],
        "submissionDate": new Date("2018-12-19 00:00"),
        "attemptNumber": 2,
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     },
    {
        "_id": submissionIDs[8],
        "userID": userIDs[0],
        "assignmentID":  assignmentIDs[4],
        "submissionDate": new Date("2018-12-10 00:00"),
        "attemptNumber": 1,
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     },
    {
        "_id": submissionIDs[9],
        "userID": userIDs[0],
        "assignmentID":  assignmentIDs[4],
        "submissionDate": new Date("2018-12-19 00:00"),
        "attemptNumber": 2,
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     },
    {
        "_id": submissionIDs[10],
        "userID": userIDs[0],
        "assignmentID":  assignmentIDs[5],
        "submissionDate": new Date("2018-12-10 00:00"),
        "attemptNumber": 1,
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     },
    {
        "_id": submissionIDs[11],
        "userID": userIDs[0],
        "assignmentID":  assignmentIDs[5],
        "submissionDate": new Date("2018-12-19 00:00"),
        "attemptNumber": 1,
        "file": "submission.py",
        "errorTesting": false,
        "cases": {
           "studentFacing": {
              "pass": 15,
              "fail": 5 
           },
           "adminFacing": {
              "pass": 15,
              "fail": 10 
           }
        }
     }
];