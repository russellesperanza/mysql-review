var db = require('./index.js');

var dbHelpers = {
  get: (cb) => {
    db.query('select * from tasks;', (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    })
  },
  post: (data, cb) => {
    db.query(`insert into tasks(name, rating) values ('${data.name}', ${data.rating});`, (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    })
  },
  getSpecific: (id, cb) => {
    db.query(`select * from tasks where id = ${id};`, (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    })
  }
};

module.exports = dbHelpers;