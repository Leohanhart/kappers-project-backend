const db = require("../db")
const { v4: uuidv4 } = require('uuid')

exports.New = (req, res) => {
    let uuid = uuidv4()
    let sql = `INSERT INTO persoon (persoon_id, voornaam, achternaam, telefoonnummer, email) VALUES('${uuid}', '${req.body.voornaam}', '${req.body.achternaam}', '${req.body.telefoonnummer}', '${req.body.email}')`;
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('new persoon')
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(uuid).status(200).end()
        return;
    });
};

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

exports.GetOne = (req, res) => {
    let sql = `SELECT * FROM persoon WHERE persoon_id = '${req.params.id}'`
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

exports.Update = (req, res) => {
    let uuid = uuidv4()
    let sql = `UPDATE persoon SET voornaam = '${req.body.voornaam}', achternaam = '${req.body.achternaam}', telefoonnummer = '${req.body.telefoonnummer}', email = '${req.body.email}' WHERE persoon_id = '${req.params.id}'`
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('persoon updated')
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
        return;
    });
};

exports.Delete = (req, res) => {
    let uuid = uuidv4()
    let sql = `DELETE FROM kapper WHERE persoon_id = '${req.params.id}'`
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('persoon deleted')
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
        return;
    });
};
