let db = require('../model/db/models')
module.exports = {
    findAll: function(req, res){
    db.Herramientas.findAll(
       )
    .then((herramientas)=>res.render('herramientas', {herramientas} ))
    .catch((error)=>{res.send(error)})

    }
}