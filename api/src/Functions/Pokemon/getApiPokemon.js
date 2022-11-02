const axios = require('axios');

const getApiPokemon = async (url) => {
    try {
         // Esta funcion me deberia traer los primeros 40 pokemons xd...
        const apiResults = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        const apiNext = await axios.get(apiResults.data.next);
        const allPokemons = await apiResults.data.results.concat(apiNext.data.results);
        for (let poke of allPokemons) {
            let url = await axios.get(p.url);
            delete poke.url;
            poke.id = url.data.id;
            poke.img = url.data.sprites.front_default;
            poke.hp = url.data.stats[0].base_stat;
            poke.strength = url.data.stats[1].base_stat;
            poke.defense = url.data.stats[2].base_stat;
            poke.speed = url.data.stats[5].base_stat;
            poke.height = url.data.height;
            poke.weight = url.data.weight;
            poke.types = url.data.types.map((el) => el.type.name);
        }
        return allPokemons;
    } catch (error) {
        console.log(error);
    }    
};

module.exports = getApiPokemon;