const db = require("../db")
const { v4: uuidv4 } = require('uuid')

exports.New = (persoon) => {
    let uuid = uuidv4()
    let sql = `INSERT INTO rooster (rooster_id, kapper_id, k_tijd_begin, k_tijd_eind) VALUES('${uuid}', '${req.body.kapper_id}}', '${req.body.k_tijd_begin}', '${req.body.k_tijd_eind}')`;
    db.query(sql, (err, result) => {
        if (!err) {
            console.log('data send')
            console.log(result)
        } else {
            console.log(err)
        }
        
    });
}
