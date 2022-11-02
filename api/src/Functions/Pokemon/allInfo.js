const getApiPokemon = require("./getApiPokemon");
const getInfoDb = require("./getInfoDb");

// Esta funcion me trae toda la infomacion de la api y la base de datos....

const allPokemons = async () => {
    try {
        const api = await getApiPokemon("https://pokeapi.co/api/v2/pokemon");
        const dbInfo = await getInfoDb();
        const allInfo = api.concat(dbInfo);
        return allInfo;
    } catch (error) {
        console.log(error);
    }
};

module.exports = allPokemons;