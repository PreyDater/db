module.exports = function (sequelize, DataTypes) {
    const AnnouncementDetails = sequelize.define(
        "AnnouncementDetails",
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
            organizationId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            announcementId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            programMasterId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            programId: {
                type: DataTypes.INTEGER,
                allowNull: true
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
    AnnouncementDetails.associate = function (models) {
        AnnouncementDetails.belongsTo(models.Announcement, {
            foreignKey: "announcementId",
        });
        AnnouncementDetails.belongsTo(models.Organization, {
            foreignKey: "organizationId",
        });
        AnnouncementDetails.belongsTo(models.ProgramMaster, {
            foreignKey: "programMasterId",
        });
        AnnouncementDetails.belongsTo(models.Program, {
            foreignKey: "programId",
        });
    };
    return AnnouncementDetails;
};
