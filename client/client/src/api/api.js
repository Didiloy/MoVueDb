const KEY4 = "k_ifxrev3b";
const KEY5 = "k_orizm94k";
const KEY1 = "k_v4ayy42d";
const KEY6 = "k_4c2c2kyg";
const KEY3 = "k_z25r6v1f";
const KEY2 = "k_d0coomyh";
const KEY7 = "k_vvwj2ui2";

const KEY = KEY3;

const IMDB_BASE_URL = "https://imdb-api.com/fr/API"
const axios = require('axios');

/**
 * Function that return an object with movies of the specified categories 
 * @param{string} categorie - "Top250Movies", "Top250Tvs", "MostPopularMovies", "MostPopularTvs", "InTheaters", "BoxOffice", "BoxOfficeAllTime"
 */
export async function getCategorie(categorie) {
    return new Promise((resolve, reject) => {
        axios.get(`${IMDB_BASE_URL}/${categorie}/${KEY}`)
            .then(function(response) {
                //console.log(response.data.items);
                resolve(response.data.items);
            })
            .catch((error) => {
                reject(error.message)
            })
    })
}

/**
 * Function that return an object with movies of the specified type of search 
 * @param{string} searchType - "Search", "SearchTitle", "SearchMovie", "SearchSeries"
 * @param{string} query - The movie or serie you want to search
 */
export async function searchApi(searchType, query) {
    return new Promise((resolve, reject) => {
        fetch(`${IMDB_BASE_URL}/${searchType}/${KEY}/${query}`)
            .then(function(response) {
                resolve(response.json());
            })
            .catch((error) => {
                reject(error.message)
            })
    })
}

// export async function serchApiTitle(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`${IMDB_BASE_URL}/Title/${KEY}/${id}`)
//             .then(function(response) {
//                 resolve(response.json());
//             })
//             .catch((error) => {
//                 reject(error.message)
//             })
//     })
// }

// export.modules = { getCategorie, searchApi };