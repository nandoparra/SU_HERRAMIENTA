module.exports = (sequelize, DataTypes)=>{
    let alias= 'Costos_Ordenes';
    let cols = {
        id_costo : {
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
        tableName: 'costos_ordenes',
        timestamps: true

    };

    let Costo_Orden = sequelize.define(alias, cols, config);
    return Costo_Orden;
}