const axios = require("axios");
const { Type } = require("../../db");


// Con esta funcion vamos a traer de la api los tipos de pokemons....

const getApiType = async () => {
    try {
      let tipoPokemon = await Type.findAll({ attributes: ["name"] });
      if (!tipoPokemon.length) {
        let url = `https://pokeapi.co/api/v2/type`;
        tipoPokemon = await axios.get(url);
        tipoPokemon = tipoPokemon.data.results.map((result) => ({
          name: result.name,
        }));
        await Type.bulkCreate(tipoPokemon);
      }
      return tipoPokemon;
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = getApiType;