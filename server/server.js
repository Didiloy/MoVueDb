const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

//J'utiliser les fichier écrits pour gérer ces requetes
const top250Movies = require('./api/top250Movies');
const top250Tvs = require('./api/top250Tvs');
const mostPopularMovies = require('./api/mostPopularMovies');
const mostPopularTvs = require('./api/mostPopularTvs');
const inTheater = require('./api/inTheater');
const boxOffice = require('./api/boxOffice');
const boxOfficeAllTime = require('./api/boxOfficeAllTime');

//rediriger les requete de ces urls vers les fichier
app.use('/api/top250Movies', top250Movies);
app.use('/api/top250Tvs', top250Tvs);
app.use('/api/mostPopularMovies', mostPopularMovies);
app.use('/api/mostPopularTvs', mostPopularTvs);
app.use('/api/inTheater', inTheater);
app.use('/api/boxOffice', boxOffice);
app.use('/api/boxOfficeAllTime', boxOfficeAllTime);

app.listen(port, () => {
    console.log("listening on port " + port);
})

// Set up home route
app.get('/', (req, res) => {
    res.send('This is the homepage');
});