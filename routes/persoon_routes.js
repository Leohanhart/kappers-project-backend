const persoon = require("../handler/persoon"),
    express = require("express")
    router = express()

router.post("/", persoon.New);
router.get("/", persoon.GetAll);

module.exports = router;