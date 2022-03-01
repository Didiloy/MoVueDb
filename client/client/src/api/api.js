const KEY = "k_ifxrev3b";
const KEY2 = "k_orizm94k";
const KEY3 = "k_v4ayy42d";
const KEY4 = "k_4c2c2kyg";
const KEY5 = "k_z25r6v1f";
const IMDB_BASE_URL = "https://imdb-api.com/en/API"
const axios = require('axios');

/**
 * categorie : ["Top250Movies", "Top250Tvs", "MostPopularMovies", "MostPopularTvs", "InTheaters", "BoxOffice", "BoxOfficeAllTime"]
 * Function that return an object with movies of the specified categories 
 */
export async function getCategorie(categorie) {
    return new Promise((resolve, reject) => {
        axios.get(`${IMDB_BASE_URL}/${categorie}/${KEY5}`)
            .then(function(response) {
                resolve(response.data.items);
            })
            .catch((error) => {
                reject(error.message)
            })
    })
}

/**
 * searchType : ["Search", "SearchTitle", "SearchMovie", "SearchSeries"]
 * query : The movie or serie you want to search
 * Function that return an object with movies of the specified type of search 
 */
export async function searchApi(searchType, query) {
    return new Promise((resolve, reject) => {
        fetch(`${IMDB_BASE_URL}/${searchType}/${KEY5}/${query}`)
            .then(function(response) {
                resolve(response.data.results);
            })
            .catch((error) => {
                reject(error.message)
            })
    })
}

// export.modules = { getCategorie, searchApi };