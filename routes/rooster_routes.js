const rooster = require("../handler/rooster"),
    express = require("express")
    router = express()

    router.post("/", rooster.New);
    router.get("/", rooster.GetAll);
    router.get("/:id", rooster.GetOne);
    router.put("/:id", rooster.Update);
    router.delete("/:id", rooster.Delete);

    module.exports = router;