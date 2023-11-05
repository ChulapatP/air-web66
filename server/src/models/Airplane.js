module.exports = (sequelize, DataTypes) => {
    const Airplane = sequelize.define('Airplane', {
    airplanename: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    status: DataTypes.STRING
    })
    return Airplane
   }