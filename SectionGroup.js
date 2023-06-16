module.exports = function (sequelize, DataTypes) {
    const SectionGroup = sequelize.define(
      "SectionGroup",
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
        groupSize:{
          type: DataTypes.INTEGER
        },
        isDeleted: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        sectionId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        termCourseId: {
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
    SectionGroup.associate = function (models) {
      SectionGroup.belongsTo(models.Section, {
        foreignKey: "sectionId",
      });
      SectionGroup.belongsTo(models.TermCourse, {
        foreignKey: "termCourseId",
      });
      SectionGroup.hasMany(models.UserGroup, {
        foreignKey: "sectionGroupId",
      });
      SectionGroup.hasMany(models.AssignmentDetails, {
        foreignKey: "groupId",
      });
      SectionGroup.hasMany(models.AssignmentGroup, {
        foreignKey: "groupId",
      });
    };
    return SectionGroup;
  };
  