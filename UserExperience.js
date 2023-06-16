module.exports = function (sequelize, DataTypes) {
    const UserExperience = sequelize.define(
        'UserExperience',
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
            userProfileId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            company: {
                type: DataTypes.STRING,
                allowNull: false

            },
            designation: {
                type: DataTypes.STRING,
                allowNull: true
            },
            jobProfile: {
                type: DataTypes.STRING,
                allowNull: true

            },
            workDuration: {
                type: DataTypes.STRING,
                allowNull: true

            },
            startDate: {
                type: DataTypes.DATE,
                allowNull: true
            },
            endDate: {
                type: DataTypes.DATE,
                allowNull: true
            },
            totalExperience: {
                type: DataTypes.STRING,
                allowNull: true
            },
            remueration: {
                type: DataTypes.STRING,
                allowNull: true
            },
            employmentType: {
                type: DataTypes.STRING,
                allowNull: true
            },
            location: {
                type: DataTypes.STRING,
                allowNull: true
            },
            locationType: {
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
                associate() {
                    // associations can be defined here
                },
            },
        }
    );

    UserExperience.associate = (models) => {
        // associations can be defined here
        UserExperience.belongsTo(models.UserProfile, {
            foreignKey: "userProfileId",
        });
        UserExperience.belongsTo(models.User, {
            foreignKey: "userId",
        });
    };

    return UserExperience;
};
