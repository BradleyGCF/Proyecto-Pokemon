const { Type, Pokemon } = require("../../db");

// Esta funcion me trae toda la informacion de la base de datos...

const getInfoDb = async () => {
    try {
        let dataDb = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    types: [],
                },
            },
        });

        let pokemons = [];
        for (let i = 0; i < dataDb.length; i++) {
            let tipos = dataDb[i].types.map((tipo) => {
              return tipo.name;
            });

            let newPokemon = {
                id: dataDb[i].id,
                name: dataDb[i].name,
                img: dataDb[i].img,
                hp: dataDb[i].hp,
                strength: dataDb[i].strength,
                defense: dataDb[i].defense,
                speed: dataDb[i].speed,
                height: dataDb[i].height,
                weight: dataDb[i].weight,
                types: tipos,
                createdDB: true,
            };
            pokemons.push(newPokemon);
        }
        return pokemons;
    } catch (error) {
        console.log;(error);
    }
};

module.exports = getInfoDb;