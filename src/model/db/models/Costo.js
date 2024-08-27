module.exports = (sequelize, DataTypes)=>{
    let alias= 'Costos';
    let cols = {
        id : {
            type: DataTypes.INTEGER(11), 
            allowNull: false, 
            autoIncrement: true, 
            primaryKey: true
        },
        tipo: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        }, 
        referencia: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        },
        nombre: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        },
        marca: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        },
        precio_compra: {

            type: DataTypes.DECIMAL(10, 2), 
            allowNull: false, 

        },
        precio_venta: {

            type: DataTypes.DECIMAL(10, 2), 
            allowNull: false, 

        },
        impuesto: {

            type: DataTypes.DECIMAL(5, 2), 
            

        },
        cantidad : {
            type: DataTypes.INTEGER(11), 
            prymaryKey: true
        },




    };
    let config= {
        tableName: 'costos',
        timeStamps: false

    };

    let Costo = sequelize.define(alias, cols, config);
    return Costo;
}