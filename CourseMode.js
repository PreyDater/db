module.exports = function (sequelize, DataTypes) {
  const CourseMode = sequelize.define(
    "CourseMode",
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
      mode: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      organizationId: {
        type: DataTypes.INTEGER,
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
  CourseMode.associate = function (models) {
    CourseMode.belongsTo(models.Organization, {
      foreignKey: "organizationId",
    });
    CourseMode.hasMany(models.CourseMaster, {
      foreignKey: "courseModeId",
    });
    CourseMode.hasMany(models.CourseFormat, {
      foreignKey: "courseModeId",
    });
  };

  return CourseMode;
};
