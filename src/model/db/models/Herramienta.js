module.exports = (sequelize, DataTypes)=>{
    let alias= 'Herramientas';
    let cols = {
        id : {
            type: DataTypes.INTEGER(11), 
            allowNull: false, 
            autoIncrement: true, 
            primaryKey: true
        },
        id_tercero : {
            type: DataTypes.INTEGER(11), 
            
        },
        nombre: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        }, 
        marca: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        },
        referencia: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        },
        serie: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        },
        periodicidad_mantenimiento: {

            type: DataTypes.ENUM('Horas', 'Dias', 'Meses'),
            allowNull: false, 

        },
        ultimo_mantenimiento: {

            type: DataTypes.DATE 
            

        },
        estado: {

            type: DataTypes.ENUM('Activa', 'Dada de baja')
            

        },
       


    };
    let config= {
        tableName: 'herramientas',
        timestamps: false

    };

    let Herramienta = sequelize.define(alias, cols, config);
    return Herramienta;
}