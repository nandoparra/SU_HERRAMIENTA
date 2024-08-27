module.exports = (sequelize, DataTypes)=>{
    let alias= 'Herramientas_Ordenes';
    let cols = {
        id_herramienta : {
            type: DataTypes.INTEGER(11), 
            allowNull: false, 
            primaryKey: true
        },
        id_orden : {
            type: DataTypes.INTEGER(11), 
            allowNull: false, 
            primaryKey: true
        }
        
    };
    let config= {
        tableName: 'herramientas_ordenes',
        timeStamps: false

    };

    let Herramienta_Orden = sequelize.define(alias, cols, config);
    return Herramienta_Orden;
}