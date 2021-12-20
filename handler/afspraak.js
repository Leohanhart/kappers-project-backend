const db = require("../db")
const { v4: uuidv4 } = require('uuid')
const persoon = require("./persoon")

exports.New = (req, res) => {
    let uuid = uuidv4()

    let sql = `INSERT INTO afspraak (afspraak_id, persoon_id, behandeling_id, datum, totale_prijs, begin_tijd, eind_tijd, totale_tijd, kapper_id) VALUES('${uuid}', '${req.body.persoon_id}', '${req.body.behandeling_id}', '${req.body.datum}', '${req.body.totale_prijs}', '${req.body.begin_tijd}', '${req.body.eind_tijd}', '${req.body.totale_tijd}', '${req.body.kapper_id}')`;
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('data send')
            console.log(req.body)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
        return;
    });
};

exports.GetAll = (req, res) => {
    let sql = `SELECT * FROM afspraak`
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('data recieved')
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
        return;
    })

};

exports.GetOne = (req, res) => {
    let sql = `SELECT * FROM afspraak WHERE afspraak_id = '${req.params.id}'`
    db.query(sql, (err, result) => {
        console.log(result)
        if (!err) {
            console.log("single user selected")
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
        return;
    })
};

exports.Update = (req, res) => {
    let sql = `UPDATE afspraak SET persoon_id = '${req.body.persoon_id}', behandeling_id = '${req.body.behandeling_id}', datum = '${req.body.datum}', totale_prijs = '${req.body.totale_prijs}', begin_tijd = '${req.body.begin_tijd}', eind_tijd = '${req.body.eind_tijd}', totale_tijd = '${req.body.totale_tijd}', kapper_id = '${req.body.kapper_id}' WHERE afspraak_id = '${req.params.id}'`
    db.query(sql, (err, result) => {
        console.log(result)
        if (!err) {
            console.log("afspraak updated")
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
    })
};

exports.Delete = (req, res) => {
    let sql = `DELETE FROM afspraak WHERE afspraak_id = '${req.params.id}'`
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('afspraak deleted')
            console.log(result)
        } else {
            console.log(err)
        }
        res.json(result).status(200).end()
        return;
    })

};
