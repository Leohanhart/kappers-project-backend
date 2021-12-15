const db = require("../db")
const { v4: uuidv4 } = require('uuid')

exports.New = (req, res) => {
    let uuid = uuidv4()
    let sql = `INSERT INTO behandeling (behandeling_id, type_behandeling, behandelduur, prijs) VALUES('${uuid}', '${req.body.type_behandeling}', '${req.body.behandelduur}', '${req.body.prijs}')`
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

exports.GetAll = (req, res) => {
    let sql = `SELECT * FROM behandeling`
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
   let sql = `SELECT * FROM behandeling WHERE type_behandeling = '${req.body.type_behandeling}'`
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
    let sql = `UPDATE behandeling SET type_behandeling = '${req.body.type_behandeling}', behandelduur_in_aantal_tijdstolen = '${req.body.behandelduur_in_aantal_tijdsloten}', prijs = '${req.body.prijs}' `
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