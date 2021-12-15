const db = require("../db")
const { v4: uuidv4 } = require('uuid')

exports.New = (req, res) => {
    let uuid = uuidv4()
    let sql = `INSERT INTO kapper (kapper_id, k_voornaam, k_achternaam, k_email, k_telefoonnummer) VALUES('${uuid}', '${req.body.k_voornaam}', '${req.body.k_achternaam}', '${req.body.k_email}', '${req.body.k_telefoonnummer}')`
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('data send')
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
        return;
    });
};