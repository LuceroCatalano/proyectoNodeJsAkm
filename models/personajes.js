module.exports = (sequelize, DataTypes) => {
    return sequelize.define("personaje", {
      nombre:{ 
          type: DataTypes.STRING,
          primaryKey: true,
        },
      imagen: DataTypes.STRING,
      edad: DataTypes.INTEGER,
      peso: DataTypes.INTEGER,
      historia: DataTypes.STRING
      });
}