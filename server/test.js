const axios = require('axios');
const test = async() => {
    await axios.post('http://localhost:4000/create/disney', {
        id: "s000",
        type: "Movie",
        title: "mon film test",
        director: "dylan",
        cast: "dylan, clément",
        country: "France",
        date_added: new Date().getTime(),
        release_year: "2022",
        duration: "100 min",
        listed_in: "Comedy",
        description: "Je teste mon api"
    }).then((result) => {
        console.log(result.data);
    })
}

const test2 = async() => {
    await axios.delete('http://localhost:4000/delete/disney/s000')
        .then((result) => {
            console.log(result.data);
        })
}

const test3 = async() => {
    await axios.put('http://localhost:4000/update/disney', {
        id: "s000",
        title: "mon film test updated",
        categories: "Horror",
    }).then((result) => {
        console.log(result.data);
    })
}

test3()