module.exports = (sequelize, DataTypes)=>{
    let alias= 'Ordenes_servicio';
    let cols = {
        id : {
            type: DataTypes.INTEGER(11), 
            allowNull: false, 
            autoIncrement: true, 
            primaryKey: true
        },
        id_cliente : {
            type: DataTypes.INTEGER(11), 
            
        },
        id_tecnico : {
            type: DataTypes.INTEGER(11), 
            
        },
        estado: {

            type: DataTypes.ENUM('Pendiente', 'En Proceso', 'Finalizada'),
            allowNull: false, 

        },
        fecha_creacion: {

            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW, 
            allowNull: false, 

        },
        fecha_revision: {

            type: DataTypes.DATE,
            

        },
        fecha_reparacion: {

            type: DataTypes.DATE,
            

        },
        fecha_entrega: {

            type: DataTypes.DATE,
            

        },
        
        descripcion_inicial: {

            type: DataTypes.TEXT, 
            allowNull: false, 

        },
        imagen_recepcion: {

            type: DataTypes.BLOB,
            allowNull: true,

        },
        dictamen_tecnico: {

            type: DataTypes.TEXT, 
            allowNull: false, 

        },
        imagen_reparacion: {

            type: DataTypes.BLOB,
            allowNull: true,
            

        }

    };
    let config= {
        tableName: 'ordenesservicio',
        timestamps: true

    };

    let Ordenes_servicio = sequelize.define(alias, cols, config);
    return Ordenes_servicio;
}