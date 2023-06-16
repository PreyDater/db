module.exports = function (sequelize, DataTypes) {
  const CourseType = sequelize.define(
    "CourseType",
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
      organizationId: {
        type: DataTypes.INTEGER,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
  CourseType.associate = (models) => {
    // associations can be defined here
    CourseType.belongsTo(models.Organization, { foreignKey: "organizationId" });
    CourseType.hasMany(models.CourseFormat, { foreignKey: "courseTypeId" });
    CourseType.hasMany(models.CourseMaster, { foreignKey: "courseTypeId" });
  };

  return CourseType;
};
