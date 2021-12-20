const persoon = require("../handler/persoon"),
    express = require("express")
    router = express()

    router.post("/", persoon.New);
    router.get("/", persoon.GetAll);
    router.get("/:id", persoon.GetOne);
    router.put("/:id", persoon.Update);
    router.delete("/:id", persoon.Delete);
module.exports = router;