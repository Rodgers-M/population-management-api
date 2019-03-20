module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    females: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    males: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    parentLocation: {
      allowNull: true,
      type: Sequelize.STRING,
      references: {
        model: 'locations',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  }, {
    tableName: 'locations'
  });
  Location.associate = (models) => {
    Location.hasMany(Location, {as: 'Sublocations', foreignKey: 'parentLocation', hooks: true})
  };
  return Location;
};
