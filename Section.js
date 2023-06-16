module.exports = function (sequelize, DataTypes) {
  const Section = sequelize.define(
    "Section",
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
      programTermId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      programId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isDraft: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isHomeSection: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      sectionCode: {
        type: DataTypes.STRING,
      },
      customName: {
        type: DataTypes.STRING,
      },
      isElective: {
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
  Section.associate = (models) => {
    // associations can be defined here
    Section.hasMany(models.TermCourse, { foreignKey: "sectionId" });
    Section.belongsTo(models.ProgramTerm, { foreignKey: "programTermId" });
    Section.hasMany(models.UserSection, { foreignKey: "sectionId" });
    Section.hasMany(models.SectionGroup, { foreignKey: "sectionId" });

  };
  return Section;
};
