/* ---------- necessary imports ----------- */

const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

/* ---------- necessary imports ----------- */

const router = require('./routes/routing');
const bodyParser = require('body-parser');

/* ---------- mongo connection ----------- */

mongoose.connect('mongodb://localhost:27017/sessions-db', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(session({
    secret: "my secret session",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
/* ---------- mongo connection ----------- */

app.use(bodyParser.json());

app.use('/', router);

app.listen(3000, () => {
    console.log("server running on port 3000");
})
