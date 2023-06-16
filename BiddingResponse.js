module.exports = function (sequelize, DataTypes) {
  const BiddingResponse = sequelize.define(
    'BiddingResponse',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4
      },
      isEnrolled: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
      },
      biddingPoints: {
        type: DataTypes.INTEGER
      },
      programTermId: {
        type: DataTypes.INTEGER
      },
      termCourseId: {
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
      },
      remarks: {
        type: DataTypes.STRING
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        },
      },
    });
    BiddingResponse.associate = (models) => {
      // associations can be defined here
      BiddingResponse.belongsTo(models.TermCourse, { foreignKey: 'termCourseId', });
      BiddingResponse.belongsTo(models.User, { foreignKey: 'userId', as: "Student"});
    };

  return BiddingResponse;
};
