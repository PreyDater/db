module.exports = function (sequelize, DataTypes) {
  const CourseTag = sequelize.define(
    "CourseTag",
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
  CourseTag.associate = function (models) {
    CourseTag.belongsTo(models.Organization, {
      foreignKey: "organizationId",
    });
    CourseTag.hasMany(models.CourseMaster, {
      foreignKey: "courseTagId",
    });
    CourseTag.hasMany(models.CourseFormat, {
      foreignKey: "courseTagId",
    });
  };
  return CourseTag;
};
