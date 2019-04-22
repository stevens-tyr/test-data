const { assignmentIDs, userIDs, submissionIDs } = require('./IDs');

const EXAMPLE_RESULTS = [
  {
    id: 0,
    panicked: false,
    passed: true,
    studentFacing: true,
    output: 'foobar',
    html: '<span>foobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 1'
  },
  {
    id: 1,
    panicked: false,
    passed: false,
    studentFacing: true,
    output: 'foobar',
    html:
      '<span>foo</span><del style="background:#ffe6e6;">&para;<br></del><span>ba</span><del style="background:#ffe6e6;">z</del><ins style="background:#e6ffe6;">r</ins>',
    testCMD: 'echo -n foobar',
    name: 'Test 2'
  },
  {
    id: 2,
    panicked: false,
    passed: false,
    studentFacing: true,
    output: 'foobar',
    html:
      '<span>fooba</span><del style="background:#ffe6e6;">z</del><ins style="background:#e6ffe6;">r</ins>',
    testCMD: 'echo -n foobar',
    name: 'Test 3'
  },
  {
    id: 3,
    panicked: false,
    passed: false,
    studentFacing: true,
    output: 'foobar',
    html:
      '<span>f</span><del style="background:#ffe6e6;">00</del><ins style="background:#e6ffe6;">oo</ins><span>bar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 4'
  },
  {
    id: 4,
    panicked: false,
    passed: false,
    studentFacing: true,
    output: 'foobar',
    html: '<ins style="background:#e6ffe6;">f</ins><span>oobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 5'
  },
  {
    id: 5,
    panicked: false,
    passed: true,
    studentFacing: true,
    output: 'foobar',
    html: '<span>foobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 6'
  },
  {
    id: 6,
    panicked: false,
    passed: true,
    studentFacing: true,
    output: 'foobar',
    html: '<span>foobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 7'
  },
  {
    id: 7,
    panicked: false,
    passed: true,
    studentFacing: true,
    output: 'foobar',
    html: '<span>foobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 8'
  },
  {
    id: 8,
    panicked: false,
    passed: true,
    studentFacing: true,
    output: 'foobar',
    html: '<span>foobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 9'
  },
  {
    id: 9,
    panicked: false,
    passed: true,
    studentFacing: false,
    output: 'foobar',
    html: '<span>foobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 10'
  },
  {
    id: 10,
    panicked: false,
    passed: true,
    studentFacing: false,
    output: 'foobar',
    html: '<span>foobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 11'
  },
  {
    id: 11,
    panicked: false,
    passed: true,
    studentFacing: false,
    output: 'foobar',
    html: '<span>foobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 12'
  },
  {
    id: 12,
    panicked: false,
    passed: true,
    studentFacing: false,
    output: 'foobar',
    html: '<span>foobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 13'
  },
  {
    id: 13,
    panicked: false,
    passed: true,
    studentFacing: false,
    output: 'foobar',
    html: '<span>foobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 14'
  },
  {
    id: 14,
    panicked: false,
    passed: true,
    studentFacing: false,
    output: 'foobar',
    html: '<span>foobar</span>',
    testCMD: 'echo -n foobar',
    name: 'Test 15'
  }
];

module.exports = [
  {
    _id: submissionIDs[0],
    userID: userIDs[0],
    assignmentID: assignmentIDs[0],
    submissionDate: new Date('2019-05-10 00:00'),
    attemptNumber: 1,
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  },
  {
    _id: submissionIDs[1],
    userID: userIDs[0],
    assignmentID: assignmentIDs[0],
    submissionDate: new Date('2019-05-19 00:00'),
    attemptNumber: 2,
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  },
  {
    _id: submissionIDs[2],
    userID: userIDs[1],
    assignmentID: assignmentIDs[1],
    submissionDate: new Date('2019-05-10 00:00'),
    attemptNumber: 1,
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  },
  {
    _id: submissionIDs[3],
    userID: userIDs[2],
    assignmentID: assignmentIDs[1],
    attemptNumber: 1,
    submissionDate: new Date('2019-05-19 00:00'),
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  },
  {
    _id: submissionIDs[4],
    userID: userIDs[1],
    assignmentID: assignmentIDs[2],
    submissionDate: new Date('2019-05-10 00:00'),
    attemptNumber: 1,
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  },
  {
    _id: submissionIDs[5],
    userID: userIDs[1],
    assignmentID: assignmentIDs[2],
    submissionDate: new Date('2019-05-19 00:00'),
    attemptNumber: 2,
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  },
  {
    _id: submissionIDs[6],
    userID: userIDs[2],
    assignmentID: assignmentIDs[3],
    submissionDate: new Date('2019-05-10 00:00'),
    attemptNumber: 1,
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  },
  {
    _id: submissionIDs[7],
    userID: userIDs[2],
    assignmentID: assignmentIDs[3],
    submissionDate: new Date('2019-05-19 00:00'),
    attemptNumber: 2,
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  },
  {
    _id: submissionIDs[8],
    userID: userIDs[0],
    assignmentID: assignmentIDs[4],
    submissionDate: new Date('2019-05-10 00:00'),
    attemptNumber: 1,
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  },
  {
    _id: submissionIDs[9],
    userID: userIDs[0],
    assignmentID: assignmentIDs[4],
    submissionDate: new Date('2019-05-19 00:00'),
    attemptNumber: 2,
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  },
  {
    _id: submissionIDs[10],
    userID: userIDs[0],
    assignmentID: assignmentIDs[5],
    submissionDate: new Date('2019-05-10 00:00'),
    attemptNumber: 1,
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  },
  {
    _id: submissionIDs[11],
    userID: userIDs[0],
    assignmentID: assignmentIDs[5],
    submissionDate: new Date('2019-05-19 00:00'),
    attemptNumber: 1,
    file: 'submission.py',
    errorTesting: false,
    results: EXAMPLE_RESULTS
  }
];
