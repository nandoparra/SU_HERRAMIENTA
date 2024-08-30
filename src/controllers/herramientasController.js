let db = require('../model/db/models')
module.exports = {
    findAll: function(req, res){
    db.Herramientas.findAll(
       )
    .then((herramientas)=>res.render('herramientas', {herramientas} ))
    .catch((error)=>{
        console.log(error);
        
        res.send('no se pudo conectar a la base de datos')})

    }
}