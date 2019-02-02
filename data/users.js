const { userIDs, courseIDs } = require('./IDs');

module.exports = [
  {
     "_id": userIDs[0],
     "email": "student@stevens.edu",
     "firstName": "John",
     "lastName": "Doe",
     "password": "password",
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
     "email": "teacher@stevens.edu",
     "firstName": "Bob",
     "lastName": "Smith",
     "password": "password",
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
     "_id": userIDs[2],
     "email": "assistant@stevens.edu",
     "firstName": "Jane",
     "lastName": "Cook",
     "password": "password",
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