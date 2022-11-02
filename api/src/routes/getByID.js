const router = require("express").Router();
const axios = require("axios");

const { Pokemon, Type } = require("../db");

// Ruta para acceder a cada pokemon por su ID..

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    // Validamos si recibe ID primero..

    try {
        const pokes = await Pokemon.findOne({
            where: { id: id },
            include: {
                model: Type,
                attribute: ["name"],
                through: {
                    types:[],
                },
            },
        });
        
        if (pokes) {
            let tipoDb = pokes.types.map((tipo) => {
                return tipo.name;
            });
            const idPokemon = {
                id: pokes.id,
                name: pokes.name,
                img: pokes.img,
                hp: pokes.hp,
                strength: pokes.strength,
                defense: pokes.defense,
                speed: pokes.speed,
                height: pokes.height,
                weight: pokes.weight,
                types: tipoDb
               
            };

            return res.json(idPokemon);
        } else {
            const allIdPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
            const bigData = allIdPokemon.data;
            const idPokemon = {
                id: bigData.id,
                name: bigData.name,
                img: bigData.sprites.front_default,
                hp: bigData.stats[0].base_stat,
                strength: bigData.stats[1].base_stat,
                defense: bigData.stats[2].base_stat,
                speed: bigData.stats[5].base_stat,
                height: bigData.height,
                weight: bigData.weight,
                types: big.Data.types.map((el) => el.type.name),
            };
            res.send(idPokemon);
    }
} catch (error) {
    res.status(500).json(error);
    console.log(error);
}
});

module.exports = router;