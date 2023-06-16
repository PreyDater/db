module.exports = function (sequelize, DataTypes) {
  const Announcement = sequelize.define(
    'Announcement',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4
      },
      title: {
        type: DataTypes.STRING
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING
      },
      cta: {
        type: DataTypes.STRING
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      announcementType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      showUntill: {
        type: DataTypes.DATE,
        allowNull: true
      },
      PinUntil :{
        type: DataTypes.DATE,
        allowNull: true
      },
      isPermanent: {
        type: DataTypes.BOOLEAN,
      },
      addLink: {
        type: DataTypes.STRING,
        allowNull: true
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      sendType: {
        type: DataTypes.STRING,
        allowNull: true
      },
      filetype: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fileSize: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        },
      },
    });
  Announcement.associate = (models) => {
    // associations can be defined here
    Announcement.belongsTo(models.Organization, { foreignKey: 'organizationId', });
    Announcement.hasMany(models.AnnouncementDetails, {
      foreignKey: "announcementId",
    });
    Announcement.belongsTo(models.User, { foreignKey: 'createdBy', });

  };

  return Announcement;
};
