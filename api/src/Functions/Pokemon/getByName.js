const axios = require('axios');
const { Pokemon, Op, Type } = require("../../db");

// de esta manera llamo a los pokemons por nombre...

const getByName = async (name) => {
    try {
      const dbName = await Pokemon.findOne({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: {
          model: Type,
          attributes: ["name"],
          through: { types: [] },
        },
      });
      if (dbName) {
        return dbName;
      }
      const namePokemon = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      if (namePokemon.data) {
        let n = namePokemon.data;
        let pokeName = {
          name: name,
          id: n.id,
          img: n.sprites.front_default,
          hp: n.stats[0].base_stat,
          strength: n.stats[1].base_stat,
          defense: n.stats[2].base_stat,
          speed: n.stats[5].base_stat,
          height: n.height,
          weight: n.weight,
          types: n.types.map((el) => el.type.name),
        };
        console.log(pokeName);
        return pokeName;
      }
    } catch (error) {
      console.log("Resultado" + error);
      return { msg: "No se encontro" };
    }
  };
  
  module.exports = getByName;