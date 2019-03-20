module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    females: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    males: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    tableName: 'locations'
  });
  Location.associate = (models) => {
    Location.hasMany(Location, {as: 'Sublocations', foreignKey: 'parentLocation', hooks: true})
  };
  return Location;
};
