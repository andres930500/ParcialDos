const { DataTypes } = require('sequelize');

function defineCountry(sequelize) {
    sequelize.define('event', {
            // Model attributes are defined here
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nombrePais: {
                type: DataTypes.STRING
            },
            CapitalPais: {
                type: DataTypes.STRING
            },
            Poblacion: {
                type: DataTypes.INTEGER
            },
            Presidente: {
                type: DataTypes.STRING
            },
            Moneda: {
                type: DataTypes.STRING
            },
        }, {
            // Other model options go here
            timestamps: false
        });
    }

module.exports = defineCountry;
