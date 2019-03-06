const { userIDs, courseIDs } = require('./IDs');

const password = Buffer.from("$2a$10$J5CkVm8dBZloYFpYS052au8pftlI.p9pAjQbQw34V9IW6gPHrZnN2", "utf8");
// All passwords are test
module.exports = [
  {
     "_id": userIDs[0],
     "email": "student@stevens.edu",
     "admin": true,
     "firstName": "John",
     "lastName": "Doe",
     "password": password,
     "enrolledCourses": [
        {
           "courseID": courseIDs[0],
           "enrollmentType": "student"
        },
        {
           "courseID": courseIDs[1],
           "enrollmentType": "student"
        },
        {
           "courseID": courseIDs[2],
           "enrollmentType": "student"
        }
     ]
  },
  {
     "_id": userIDs[1],
     "email": "student1@stevens.edu",
     "admin": false,
     "firstName": "John",
     "lastName": "Doe",
     "password": password,
     "enrolledCourses": [
        {
           "courseID": courseIDs[0],
           "enrollmentType": "student"
        },
        {
           "courseID": courseIDs[1],
           "enrollmentType": "student"
        },
        {
           "courseID": courseIDs[2],
           "enrollmentType": "student"
        }
     ]
  },
  {
     "_id": userIDs[2],
     "email": "student2@stevens.edu",
     "admin": false,
     "firstName": "John",
     "lastName": "Doe",
     "password": password,
     "enrolledCourses": [
        {
           "courseID": courseIDs[0],
           "enrollmentType": "student"
        },
        {
           "courseID": courseIDs[1],
           "enrollmentType": "student"
        },
        {
           "courseID": courseIDs[2],
           "enrollmentType": "student"
        }
     ]
  },
  {
     "_id": userIDs[3],
     "email": "teacher@stevens.edu",
     "admin": true,
     "firstName": "Bob",
     "lastName": "Smith",
     "password": password,
     "enrolledCourses": [
        {
           "courseID": courseIDs[0],
           "enrollmentType": "teacher"
        },
        {
           "courseID": courseIDs[1],
           "enrollmentType": "teacher"
        },
        {
           "courseID": courseIDs[2],
           "enrollmentType": "teacher"
        }
     ]
  },
  {
     "_id": userIDs[4],
     "email": "assistant@stevens.edu",
     "admin": false,
     "firstName": "Jane",
     "lastName": "Cook",
     "password": password,
     "enrolledCourses": [
        {
           "courseID": courseIDs[0],
           "enrollmentType": "assistant"
        },
        {
           "courseID": courseIDs[1],
           "enrollmentType": "assistant"
        },
        {
           "courseID": courseIDs[2],
           "enrollmentType": "assistant"
        }
     ]
  }
];