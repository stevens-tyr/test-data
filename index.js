const axios = require("axios");
const {
  users,
  courses,
  assignments,
  submissions
} = require("./config/mongoCollection");
const {
  userData,
  courseData,
  assignmentData,
  submissionData
} = require("./data");

/**
 * Given a collection function, array of documents, and a string describing
 * the type of data we're inserting into Mongo, insert the data into the appropriate
 * collection
 *
 * @param {function} collection
 * @param {Array} data
 * @param {String} collectionType
 */
const addToDb = async (collection, data, collectionType) => {
  const coll = await collection();
  const res = await coll.insertMany(data);
  if (res.result.ok) {
    console.log(`${res.insertedCount} documents added to Mongo`);
    // return true;
  } else {
    console.log(`Something went wrong while adding ${collectionType}`);
    // return false;
  }
};

const main = async () => {
  await addToDb(users, userData, "users");
  await addToDb(courses, courseData, "courses");
  await addToDb(assignments, assignmentData, "assignments");
  await addToDb(submissions, submissionData, "submissions");
  return;
};

main();
