const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

//get most popular movies
const URL = `https://imdb-api.com/fr/API/MostPopularMovies/${process.env.IMDB_API_KEY}`;

router.get('/', (req, res) => {
    axios.get(URL)
        .then(function(response) {
            res.send(response.data.items);
        })
        .catch((error) => {
            res.send(error.message)
        })
});

module.exports = router;