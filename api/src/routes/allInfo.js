const router = require("express").Router();

// Ruta para acceder a toda la informacion que suministra la api.....

const allInfo = require("../Functions/Pokemon/allInfo");
const getByName = require("../Functions/Pokemon/getByName");

router.get("/", async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const byName = await getByName(name);
            res.json([byName]);
        } else {
            const allPokemons = await allInfo();
            res.json(allPokemons);
        }
    } catch (error) {
        res.status(400).json({ msg: "No se encontro el Pokemon"});
    }
});

module.exports = router;







