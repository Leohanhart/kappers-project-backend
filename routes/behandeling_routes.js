const behandeling = require("../handler/behandeling"),
    express = require("express")
    router = express()

router.post("/", behandeling.New);
router.get("/All", behandeling.GetAll);
router.get("/One", behandeling.GetOne);
router.put("/", behandeling.Update);


    module.exports = router;