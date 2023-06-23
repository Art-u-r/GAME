const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
    }
  }
  Quiz.init(
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      point: DataTypes.INTEGER,
      result: DataTypes.INTEGER,
      theme_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Quiz',
    },
  );
  return Quiz;
};
