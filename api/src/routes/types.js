const router = require("express").Router();
const getApiType = require("../Functions/Type/getApiType");

router.get("/", async (req, res) => {
  try {
    const allTypes = await getApiType();
    res.send(allTypes);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;