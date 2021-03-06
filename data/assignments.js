const { assignmentIDs, userIDs, submissionIDs } = require('./IDs');

const EXAMPLE_TESTS = [
  {
    name: 'Test 1',
    expectedOutput: 'foobar',
    studentFacing: true,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 2',
    expectedOutput: 'foo\nbaz',
    studentFacing: true,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 3',
    expectedOutput: 'foobaz',
    studentFacing: true,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 4',
    expectedOutput: 'f00bar',
    studentFacing: true,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 5',
    expectedOutput: 'oobar',
    studentFacing: true,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 6',
    expectedOutput: 'foobar',
    studentFacing: true,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 7',
    expectedOutput: 'foobar',
    studentFacing: true,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 8',
    expectedOutput: 'foobar',
    studentFacing: true,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 9',
    expectedOutput: 'foobar',
    studentFacing: true,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 10',
    expectedOutput: 'foobar',
    studentFacing: false,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 11',
    expectedOutput: 'foobar',
    studentFacing: false,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 12',
    expectedOutput: 'foobar',
    studentFacing: false,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 13',
    expectedOutput: 'foobar',
    studentFacing: false,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 14',
    expectedOutput: 'foobar',
    studentFacing: false,
    testCMD: 'echo -n foobar'
  },
  {
    name: 'Test 15',
    expectedOutput: 'foobar',
    studentFacing: false,
    testCMD: 'echo -n foobar'
  }
];

module.exports = [
  {
    _id: assignmentIDs[0],
    language: 'python',
    version: '3.7',
    name: 'Loops',
    description:
      "This week, we're going to have some practice with Loops. Below are a few problems for you to solve. This assignment is due on December 11th, 2018",
    supportingFiles: 'loops.pdf',
    dueDate: new Date('2019-04-11 00:00'),
    published: true,
    testBuildCMD: 'make',
    numAttempts: 10,
    tests: EXAMPLE_TESTS,
    submissions: [
      {
        userID: userIDs[0],
        submissionID: submissionIDs[0],
        attemptNumber: 1
      },
      {
        userID: userIDs[0],
        submissionID: submissionIDs[1],
        attemptNumber: 2
      }
    ]
  },
  {
    _id: assignmentIDs[1],
    language: 'python',
    version: '3.7',
    name: 'Recursion',
    description:
      'Last week, we looked at loops, but this week we want to take a look at recursion. Recursion is another form of iteration that helps programmers to break problem into small subproblems. Attached to this assignment are problems that you guys will implement. This is due on December 20th, 2018.',
    supportingFiles: 'recursion.pdf',
    dueDate: new Date('2019-20-11 00:00'),
    published: false,
    numAttempts: 10,
    tests: EXAMPLE_TESTS,
    submissions: [
      {
        userID: userIDs[1],
        submissionID: submissionIDs[2],
        attemptNumber: 1
      },
      {
        userID: userIDs[2],
        submissionID: submissionIDs[3],
        attemptNumber: 1
      }
    ]
  },
  {
    _id: assignmentIDs[2],
    language: 'python',
    version: '3.7',
    name: 'Linked Lists',
    description:
      'Linked Lists are a new data structure that we have introduced about this week. Attached to this page are questions to solve that should help to solidify your knowledge of linked lists.',
    supportingFiles: 'linked_lists.pdf',
    dueDate: new Date('2019-05-11 00:00'),
    published: true,
    testBuildCMD: 'make',
    numAttempts: 2,
    tests: EXAMPLE_TESTS,
    submissions: [
      {
        userID: userIDs[1],
        submissionID: submissionIDs[4],
        attemptNumber: 1
      },
      {
        userID: userIDs[1],
        submissionID: submissionIDs[5],
        attemptNumber: 2
      }
    ]
  },
  {
    _id: assignmentIDs[3],
    language: 'python',
    version: '3.7',
    name: 'Hash Maps',
    description:
      "Hash Maps are probably one of the most important data structures to know, so this week, we've prepared problems that you guys will have to implement that ensures that you will thoroughly understand how to use and implement hashmaps",
    supportingFiles: 'hashmaps.pdf',
    dueDate: new Date('2019-05-20 00:00'),
    published: true,
    testBuildCMD: 'make',
    numAttempts: 10,
    tests: EXAMPLE_TESTS,
    submissions: [
      {
        userID: userIDs[2],
        submissionID: submissionIDs[6],
        attemptNumber: 1
      },
      {
        userID: userIDs[2],
        submissionID: submissionIDs[7],
        attemptNumber: 2
      }
    ]
  },
  {
    _id: assignmentIDs[4],
    language: 'python',
    version: '3.7',
    name: 'Stair Climber',
    description:
      'This week, we\'re going to implement what we\'ve learned in CS101 with recursion to solve a problem. The basic stair climber problem asks the following: "If you can take one or two steps at a time, how many distinct ways are there to climb N stairs?" This problem and its extension problems are in the attached pdf.',
    supportingFiles: 'stair_climber.pdf',
    dueDate: new Date('2019-05-11 00:00'),
    published: true,
    testBuildCMD: 'make',
    numAttempts: 5,
    tests: EXAMPLE_TESTS,
    submissions: [
      {
        userID: userIDs[0],
        submissionID: submissionIDs[8],
        attemptNumber: 1
      },
      {
        userID: userIDs[0],
        submissionID: submissionIDs[9],
        attemptNumber: 2
      }
    ]
  },
  {
    _id: assignmentIDs[5],
    name: 'Knapsack Problem',
    language: 'c++',
    description:
      'The knapsack problem is a common interviewing question. The knapsack problem is as follows: "You are passed an array of items with a weight and value. You have a knapsack that can only carry a limited amount of weight. Find the combination of items that maximizes the value that you can put into the knapsack."',
    supportingFiles: 'knapsack.pdf',
    dueDate: new Date('2019-05-20 00:00'),
    published: false,
    testBuildCMD: 'make',
    numAttempts: 7,
    tests: EXAMPLE_TESTS,
    submissions: [
      {
        userID: userIDs[0],
        submissionID: submissionIDs[10],
        attemptNumber: 1
      },
      {
        userID: userIDs[0],
        submissionID: submissionIDs[11],
        attemptNumber: 1
      }
    ]
  }
];
