const KEY = "k_orizm94k";
const IMDB_BASE_URL = "https://imdb-api.com/fr/API/"
const axios = require('axios');

export async function getCategorie(categorie) {
    return new Promise((resolve, reject) => {
        axios.get(`${IMDB_BASE_URL}/${categorie}/${KEY} +`)
            .then(function(response) {
                resolve(response.data.items);
            })
            .catch((error) => {
                reject(error.message)
            })
    })
}

export async function searchApi(searchType, query) {
    return new Promise((resolve, reject) => {
        fetch(`${IMDB_BASE_URL}/${searchType}/${KEY}/${query}`)
            .then(function(response) {
                resolve(response.data.results);
            })
            .catch((error) => {
                reject(error.message)
            })
    })
}

// export.modules = { getCategorie, searchApi };