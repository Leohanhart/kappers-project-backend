const db = require("../db")
const { v4: uuidv4 } = require('uuid')
const persoon = require("./persoon")

exports.New = (req, res) => {
    let uuid = uuidv4()
    var persoonId = persoon.NewPersoon(req.body.persoon)

    let sql = `INSERT INTO afspraak (afspraak_id, persoon_id, behandeling_id, datum, totale_prijs, begin_tijd, eind_tijd, totale_tijd, kapper_id) VALUES('${uuid}', '${persoonId}', '${req.body.behandeling_id}', '${req.body.datum}', '${req.body.totale_prijs}', '${req.body.begin_tijd}', '${req.body.eind_tijd}', '${req.body.totale_tijd}', '${req.body.kapper_id}')`;
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('data send')
            console.log(req.body.date)
        } else {
            console.log(err)
        }
        res.json(req.body.datum).status(200).end()
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
    })

};

exports.GetOne = (req, res) => {
    let sql = `SELECT * FROM afspraak WHERE afspraak_id = '${req.params.id}'`
    db.query(sql, (err, result) => {
        console.log(result)
        if (!err) {
            console.log(req.params.id)
            console.log(result)
            res.send(result)
        } else {
            console.log(err)
        }

    })
};
