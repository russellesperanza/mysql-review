var db = require('./index.js');

var tasks = [
  {
    name: 'coding',
    rating: 10
  },
  {
    name: 'washing dishes',
    rating: 1
  },
  {
    name: 'laundry',
    rating: 10
  },
  {
    name: 'cooking',
    rating: 10
  },
  {
    name: 'sleeping',
    rating: 10
  }
];

function seedMe() {
  tasks.forEach((task) => {
    db.query(`insert into tasks (name, rating) values ('${task.name}', '${task.rating}');`, (err, result) => {
      if (err) {
        console.log('Seed failed');
      } else {
        console.log('Seed success');
      }
    })                                                   
  });
  db.end();
}

seedMe();