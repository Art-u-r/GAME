const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Quiz }) {
      this.hasMany(Quiz, { foreignKey: 'theme_id' });
    }
  }
  Theme.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Theme',
    },
  );
  return Theme;
};
