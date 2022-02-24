const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

//get boxOffice
const URL = `https://imdb-api.com/fr/API/BoxOffice/${process.env.IMDB_API_KEY}`;

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