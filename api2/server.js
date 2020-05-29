//Run 'npm install express' before running node server
//Run 'npm install body-parser --save'
//Run 'npm install sqlite3 --save'

const express = require('express')
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3')
const app = express()

const PORT = 3000;

//Database Parts
let sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
})

db.serialize(() => {
  db.run("CREATE TABLE scores ( id INT, name TEXT, score INT)");

  //need to figure out how to insert things into the db
})

app.use(bodyParser.urlencoded({extended: true}))

//GETS

app.get('/test', (req, res) => {
  return res.send('Hello World\n')
});

app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/index.html');
  //return res.send('Received a GET HTTP method\n');
});

//POSTS

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method\n');
})

app.post('/scoreboard', (req, res) => {
  console.log(req.body)
})

//PUTS

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method\n');
})

//DELETE

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method\n');
})

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`),
);
