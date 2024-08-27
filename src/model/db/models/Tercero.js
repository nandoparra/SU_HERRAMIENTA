module.exports = (sequelize, DataTypes)=>{
    let alias= 'Terceros';
    let cols = {
        id : {
            type: DataTypes.INTEGER(11), 
            allowNull: false, 
            autoIncrement: true, 
            primaryKey: true
        },
        identificacion: {

            type: DataTypes.STRING(20), 
            allowNull: false, 

        }, 
        tipo_identificacion: {

            type: DataTypes.ENUM('Cedula', 'NIT'), 
            allowNull: false, 

        },
        nombre: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        },
        razon_social: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        },
        telefono: {

            type: DataTypes.STRING(15), 
            allowNull: false, 

        },
        direccion: {

            type: DataTypes.STRING(255), 
            

        },
        contacto: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        },
        telefono_contacto: {

            type: DataTypes.STRING(15), 
            allowNull: false, 

        },
        usuario: {

            type: DataTypes.STRING(255), 
            allowNull: false, 

        },
        rol: {

            type: DataTypes.ENUM('Cliente', 'Tecnico', 'Administrativo'), 
            allowNull: false, 

        }
    };
    let config= {
        tableName: 'terceros',
        timestamps: false

    };

    let Tercero = sequelize.define(alias, cols, config);
    return Tercero;
}