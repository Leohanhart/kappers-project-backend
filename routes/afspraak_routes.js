const afspraak = require("../handler/afspraak"),
    express = require("express")
    router = express()

router.post("/", afspraak.New);
router.get("/", afspraak.GetAll);
router.get("/:id", afspraak.GetOne)
router.put("/:id", afspraak.Update)
router.delete("/:id", afspraak.Delete)

module.exports = router;