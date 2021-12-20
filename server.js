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
    

const swagger = require("swagger-ui-express")
const swaggerdocument = require("./swagger.json")


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

app.use('/api-docs', swagger.serve)
app.use('/api-docs', swagger.setup(swaggerdocument))




