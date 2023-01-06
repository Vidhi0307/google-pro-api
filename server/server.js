const express = require('express');
const cors = require ('cors');
require('dotenv').config({path: "./config.env"});
const path = require('path');
const  { graphHTTP } =require('éxpress-graphql');
const schema = require ('./schema/schema')
const db = require('./config/connection');
/*const routes = require('./routes'); */

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use('/graphql',graphHTTP({schema,
  graphiql:process.env.NODE_ENV === 'development'

}))
app.listen(PORT,console.log(`server running on port ${PORT}`))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
/* if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
`` */