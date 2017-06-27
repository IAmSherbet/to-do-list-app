const express = require('express');
const models = require('./server/models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./server/schema/schema');

const app = express();

const MONGO_URI = 'mongodb://sbajracharya:password@ds139362.mlab.com:39362/to-do-list-app';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.on('error', error => console.log('Error connecting to Mongolab:', error));
db.once('open', () => console.log('Connected to Mongolab instance.'));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening');
});
