const afspraak = require("../handler/afspraak"),
    express = require("express")
    router = express()

router.post("/", afspraak.New);
router.get("/", afspraak.GetAll);
router.get("/:id", afspraak.GetOne)

module.exports = router;