require('dotenv').config({ path: './.env' });
let express = require('express');
let socket = require('socket.io');

let app = express();

// Body-parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Default headers to enbale cors for develop enviroment
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Start server
var port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log("Server running on port: " + port);
})

// Configure routing
app.get('/api', (req, res) => res.send('Welcome to Express'));
let mongoose = require('mongoose');

// DB connection
const dbPath = `mongodb://${process.env.DB_HOST}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
  console.log(`connected successfully to DB hosted in: ${process.env.DB_HOST}`);
}, error => {
  console.log(error, 'error will connecting to the DB');
})

const io = socket(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  require('./youtubeRecords/youtubeRecordsRoutes')(socket);
});

exports.socketIo = io;

