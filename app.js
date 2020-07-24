const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross origin requests
app.use(cors());

mongoose.connect(
  'mongodb+srv://nikunjAdmin:mypasswordnikunj@nikunj-mongodb-cluster-ijqjz.mongodb.net/books_db?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
);

mongoose.connection.once('open', () => {
  console.log('Connected to DB');
});

app.listen(4005, () => {
  console.log('Listening on port 4005');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);
