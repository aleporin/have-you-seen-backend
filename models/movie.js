'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init(
    {
      title: { type: DataTypes.STRING(150), allowNull: false },
      description: { type: DataTypes.STRING(2000), allowNull: false },
      source: { type: DataTypes.STRING(150), allowNull: false },
      watched: { type: DataTypes.BOOLEAN, allowNull: false },
      image: { type: DataTypes.STRING(100), allowNull: false },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'users', key: 'id' },
        field: 'user_id'
      }
    },
    {
      sequelize,
      modelName: 'Movie',
      tableName: 'movies'
    }
  )
  return Movie
}
