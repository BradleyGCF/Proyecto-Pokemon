const router = require("express").Router();
// const axios = require("axios");

// const { Pokemon, Type } = require("../db");
const allPokemons = require("../Functions/Pokemon/allInfo");

// Ruta para acceder a cada pokemon por su ID..

router.get("/pokemons/:id", async (req, res) => {
     const  id  = req.params.id;

    console.log(id);
    const pokemonTotal = await allPokemons()
    if(id){
        let pokemonId = await pokemonTotal.filter(el => el.id == id)
        pokemonId.length?
        res.status(200).json(pokemonId) :
        res.status(404).send('No se encontro el pokemon')
    }
})
module.exports = router;
