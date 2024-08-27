let db = require('../model/db/models')
module.exports = {
    findAll: function(req, res){
    db.Herramientas.findAll({
        attributes: ['id', 'id_tercero', 'nombre', 'marca', 'referencia', 'serie', 'periodicidad_mantenimiento', 'ultimo_mantenimiento', 'estado']
      })
    .then((herramientas)=>res.render('herramientas', {herramientas} ))
    .catch((error)=>{res.send(error)})

    }
}