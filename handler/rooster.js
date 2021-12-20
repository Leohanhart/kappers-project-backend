const db = require("../db")
const { v4: uuidv4 } = require('uuid')

exports.New = (persoon) => {
    let uuid = uuidv4()
    let sql = `INSERT INTO rooster (rooster_id, kapper_id, k_tijd_begin, k_tijd_eind) VALUES('${uuid}', '${req.body.kapper_id}}', '${req.body.k_tijd_begin}', '${req.body.k_tijd_eind}')`;
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('new rooster')
            console.log(result)
        } else {
            console.log(err)
        }
        
    });
}

exports.GetAll = (req, res) => {
    let sql = `SELECT * FROM rooster`
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
    let sql = `SELECT * FROM rooster WHERE rooster_id = '${req.params.id}'`
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
    let sql = `UPDATE rooster SET kapper_id = '${req.body.kapper_id}', k_tijd_begin = '${req.body.k_tijd_begin}', k_tijd_eind = '${req.body.k_tijd_eind}' WHERE rooster_id = '${req.params.id}'`
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('rooster updated')
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
    let sql = `DELETE FROM kapper WHERE rooster_id = '${req.params.id}'`
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('rooster deleted')
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
        return;
    });
};
