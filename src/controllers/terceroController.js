const db = require("../model/db/models");
const Tercero= db.Terceros;
console.log(Tercero);
module.exports = {
    crear: (req, res) => {
		res.render("tercero");
	},
    store: function (req, res) {
        console.log(req.body);
       Tercero.create({
                identificacion: req.body.identificacion,
                tipo_identificacion: req.body.tipo_id, 
                nombre: req.body.nombre,
                razon_social:req.body.razon_social,
                telefono: req.body.telefono,
                direccion: req.body.direccion,
                contacto: req.body.contacto,
                telefono_contacto: req.body.tel_contacto,  
                usuario: req.body.usuario,
                rol: req.body.rol,
       });

       res.redirect('/');
    },
}