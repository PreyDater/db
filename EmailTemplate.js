module.exports = function (sequelize, DataTypes) {
  const EmailTemplate = sequelize.define(
    "EmailTemplate",
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
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      subject: {
        type: DataTypes.TEXT,
      },
      body: {
        type: DataTypes.TEXT,
      },
      slug :{
        type: DataTypes.STRING,
        allowNull:false,
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
  //   CourseType.associate = (models) => {
  //     // associations can be defined here
  //     CourseType.belongsTo(models.Organization, { foreignKey: "organizationId" });
  //     CourseType.hasMany(models.CourseFormat, { foreignKey: "courseTypeId" });
  //     CourseType.hasMany(models.CourseMaster, { foreignKey: "courseTypeId" });
  //   };

  return EmailTemplate;
};
