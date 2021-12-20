const kapper = require("../handler/kapper"),
    express = require("express")
    router = express()

    router.post("/", kapper.New);
    router.get("/", kapper.GetAll);
    router.get("/:id", kapper.GetOne);
    router.put("/:id", kapper.Update);
    router.delete("/:id", kapper.Delete);

    module.exports = router;