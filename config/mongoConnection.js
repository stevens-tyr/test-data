const MongoClient = require("mongodb").MongoClient;

let mongoUrl = "mongodb://localhost:27017";
let _connection = undefined;
let _db = undefined;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(
      mongoUrl,
      { useNewUrlParser: true }
    );
    _db = await _connection.db("test");
  }
  return _db;
};
