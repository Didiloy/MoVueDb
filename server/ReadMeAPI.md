# Commande de l'API :
### Note : tous les textes précédés des ":" sont des paramètres (type precisé à chaque fois entre parenthèses)
## Disney : 
* Recherche avec l'ID : `localhost:4000/search/disney/?id=:id` (:id : 's'+ int)
* Recherche avec le type : `localhost:4000/search/disney/?type=:type` (:type : ['Movie', 'Tv Show'])
* Recherche avec l'année de sortie : `localhost:4000/search/disney/?year=:year` (:year : year wanted)
* Recherche avec le pays de sortie: `localhost:4000/search/disney/?country=:country` (:country : country with english name)

## Netflix : 
* Recherche avec l'ID : `localhost:4000/search/netflix/?id=:id` (:id : 's'+ int)
* Recherche avec le type : `localhost:4000/search/netflix/?type=:type` (:type : ['Movie', 'Tv Show'])
* Recherche avec l'année de sortie : `localhost:4000/search/netflix/?year=:year` (:year : year wanted)
* Recherche avec le pays de sortie: `localhost:4000/search/netflix/?country=:country` (:country : country with english name)

## Amazon : 
* Recherche avec l'ID : `localhost:4000/search/amazon/?id=:id` (:id : 's'+ int)
* Recherche avec le type : `localhost:4000/search/amazon/?type=:type` (:type : ['Movie', 'Tv Show'])
* Recherche avec l'année de sortie : `localhost:4000/search/amazon/?year=:year` (:year : year wanted)
* Recherche avec le pays de sortie: `localhost:4000/search/amazon/?country=:country` (:country : country with english name)

# __TODO__
- CRUD 
    - Créer un film avec une requete post
    - update un film avec une requete put
    - supprimer avec un requete delete