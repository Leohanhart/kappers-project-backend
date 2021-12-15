const express = require("express"),
    app = express(),
    bodyparser = require("body-parser"),
    afspraak = require("./routes/afspraak_routes"),
    behandeling = require("./routes/behandeling_routes"),
    contact = require("./routes/contact_routes"),
    kapper = require("./routes/kapper_routes"),
    persoon = require("./routes/persoon_routes"),
    rooster = require("./routes/rooster_routes"),
    skills = require("./routes/skills_routes"),
    vesting = require("./routes/vesting_routes")
    


const swaggerUi = require('swagger-ui-express');
YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.YAML');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyparser.json());

app.use("/api/afspraak", afspraak)
app.use("/api/behandeling", behandeling)
app.use("/api/contact", contact)
app.use("/api/kapper", kapper)
app.use("/api/persoon", persoon)
app.use("/api/rooster", rooster)
app.use("/api/skills", skills)
app.use("/api/vesting", vesting)

app.listen(3000, () => {
    console.log("server staat aan")
})





