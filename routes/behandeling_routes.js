const behandeling = require("../handler/behandeling"),
    express = require("express")
    router = express()

router.post("/", behandeling.New);
router.get("/", behandeling.GetAll);
router.get("/:id", behandeling.GetOne);
router.put("/:id", behandeling.Update);
router.delete("/:id", behandeling.Delete);


    module.exports = router;