const db = require("../db")
const { v4: uuidv4 } = require('uuid')

exports.New = (req, res) => {
    let uuid = uuidv4()
    let sql = `INSERT INTO kapper (kapper_id, k_voornaam, k_achternaam, k_email, k_telefoonnummer) VALUES('${uuid}', '${req.body.k_voornaam}', '${req.body.k_achternaam}', '${req.body.k_email}', '${req.body.k_telefoonnummer}')`
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('kapper inserted')
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
        return;
    });
};

exports.GetAll = (req, res) => {
    let uuid = uuidv4()
    let sql = `SELECT * FROM kapper`
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

exports.GetOne = (req, res) => {
    let uuid = uuidv4()
    let sql = `SELECT * FROM kapper WHERE kapper_id = '${req.body.kapper_id}'`
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

exports.Delete = (req, res) => {
    let uuid = uuidv4()
    let sql = `DELETE FROM kapper WHERE kapper_id = '${req.params.id}'`
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

exports.Update = (req, res) => {
    let uuid = uuidv4()
    let sql = `UPDATE kapper SET k_voornaam = '${req.body.k_voornaam}', k_achternaam = '${req.body.k_achternaam}', k_email = '${req.body.k_email}', k_telefoonnummer = '${req.body.k_telefoonnummer}' WHERE kapper_id = '${req.params.id}'`
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('kapper updated')
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
        return;
    });
};