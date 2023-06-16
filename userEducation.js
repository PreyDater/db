module.exports = function (sequelize, DataTypes) {
  const UserEducation = sequelize.define(
    "UserEducation",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: true,
        defaultValue: DataTypes.UUIDV4,
      },
      instituteName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      passingYear: {
        type: DataTypes.INTEGER,
        allowNull: true,
        required: true
      },
      markingScheme: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cgpa: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      board: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      universityName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      degreeName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      resultStatus: {
        type: DataTypes.ENUM,
        values: ["Pass", "Fail"],
        allowNull: true,
        defaultValue: "Pass",
      },
      stream: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userProfileId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  UserEducation.associate = (models) => {
    // associations can be defined here
    UserEducation.belongsTo(models.UserProfile, {
      foreignKey: "userProfileId",
    });
    UserEducation.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };

  return UserEducation;
};
