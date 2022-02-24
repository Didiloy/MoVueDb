const express = require('express');
const router = express.Router();
const parse = require('url-parse');
const axios = require('axios');
require('dotenv').config();

// url of the search should be like 'http://localhost:4000/api/searchMovies/?q=foo'

//get boxOfficeAllTime 
const URL = `https://imdb-api.com/fr/API/SearchSeries/${process.env.IMDB_API_KEY}`;

router.get('/*', (req, res) => {
    let q = parse(req.url, true);
    if (q.query.q) {
        movieName = q.query.q;
        axios.get(`${URL}/${movieName}`)
            .then(function(response) {
                res.send(response.data.results);
            })
            .catch((error) => {
                res.send(error.message)
            })

    } else {
        res.send(404);
    }
});

module.exports = router;