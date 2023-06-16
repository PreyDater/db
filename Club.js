module.exports = function (sequelize, DataTypes) {
  const Clubs = sequelize.define(
    "Clubs",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      clubName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      remarks: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reason: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      presidentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      clubTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "approved", "rejected"),
        defaultValue: "pending",
      },
      socialLinks: {
        type: DataTypes.JSON,
      },
      coverPicture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clubLogo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clubDocuments: {
        type: DataTypes.JSON,
      },
      guidedDocument: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      clubMission: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      clubVision: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      programMasterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isSelected: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        alias: "Created",
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
  Clubs.associate = (models) => {
    // associations can be defined here
    Clubs.belongsTo(models.User, { foreignKey: "createdBy", as: "Creator" });
    Clubs.belongsTo(models.User, {
      foreignKey: "presidentId",
      as: "President",
    });
    Clubs.belongsTo(models.ClubType, { foreignKey: "clubTypeId" });
    // Clubs.belongsTo(models.ClubType, {foreignKey: 'clubTypeId'});
    Clubs.hasMany(models.Events, { foreignKey: "clubId" });
    Clubs.hasMany(models.ClubMember, { foreignKey: "clubId" });
    Clubs.hasMany(models.ClubResponseComment, { foreignKey: "clubId" });
    Clubs.belongsTo(models.ProgramMaster, { foreignKey: "programMasterId" });
  };

  return Clubs;
};
