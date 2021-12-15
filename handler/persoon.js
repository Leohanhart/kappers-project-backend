const db = require("../db")
const { v4: uuidv4 } = require('uuid')

exports.New = (req, res) => {
    let uuid = uuidv4()
    let sql = `INSERT INTO persoon (persoon_id, voornaam, achternaam, geboortedatum, telefoonnummer, email) VALUES('${uuid}', '${req.body.voornaam}', '${req.body.achternaam}', '${req.body.geboortedatum}', '${req.body.telefoonnummer}', '${req.body.email}')`;
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('data send')
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(uuid).status(200).end()
        return (uuid);
    });
};


module.exports.NewPersoon = (persoon) => {
    let uuid = uuidv4()
    let sql = `INSERT INTO persoon (persoon_id, voornaam, achternaam, telefoonnummer, email) VALUES('${uuid}', '${persoon.voornaam}', '${persoon.achternaam}', '${persoon.telefoonnummer}', '${persoon.email}')`;
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('data send')
            console.log(result)
        } else {
            console.log(err)
        }
        
    });
    return uuid;
}

exports.GetAll = (req, res) => {
    let sql = `SELECT * FROM persoon`
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('data get')
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
        return;
    });
};
