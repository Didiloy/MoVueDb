const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

const top250Movies = require('./api/top250Movies'); //J'utiliser le fichier écrire pour gérer cette requete

app.use('/api/top250Movies', top250Movies); //rediriger les requete de cette url vers le fichier

app.listen(port, () => {
    console.log("listening on port " + port);
})

// Set up home route
app.get('/', (req, res) => {
    res.send('This is the homepage');
});