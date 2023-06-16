module.exports = function (sequelize, DataTypes) {
  const UserProfile = sequelize.define(
    "UserProfile",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      linkedIn: {
        type: DataTypes.STRING,
      },
      profileType: {
        type: DataTypes.ENUM(
          "Student",
          "Practitioner",
          "Resident",
          "Cxo",
          "Visiting"
        ),
        defaultValue: "Student",
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
      classMethods: {
        associate() {
          // associations can be defined here
        },
      },
    }
  );
  UserProfile.associate = (models) => {
    // associations can be defined here
    UserProfile.hasMany(models.UserEducation, {
      foreignKey: "userProfileId",
    });
    UserProfile.hasMany(models.UserExperience, {
      foreignKey: "userProfileId",
    });
    UserProfile.belongsTo(models.User, {
      foreignKey: "userId"
    })
   
  };

  return UserProfile;
};
