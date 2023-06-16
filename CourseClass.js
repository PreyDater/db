module.exports = function (sequelize, DataTypes) {
  const CourseClass = sequelize.define(
    "CourseClass",
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
      name: {
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
  CourseClass.associate = function (models) {
    CourseClass.belongsTo(models.Organization, {
      foreignKey: "organizationId",
    });
    CourseClass.hasMany(models.CourseMaster, {
      foreignKey: "courseClassId",
    });
    CourseClass.hasMany(models.CourseFormat, {
        foreignKey: "courseClassId",
      });
      CourseClass.hasMany(models.TermCourse, {
        foreignKey: "courseClassId",
      });
  };
  return CourseClass;
};
