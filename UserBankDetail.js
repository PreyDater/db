const { STRING } = require("sequelize")

module.exports = function (sequelize, DataTypes) {
    const UserBankDetail = sequelize.define('UserBankDetail', {
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
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        accountHolderName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bankName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        accountNumber: {
            type: DataTypes.BIGINT,
            allowNull: false

        },
        bankBranch: {
            type: DataTypes.STRING,
            allowNull: false
        },
        panCardNo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        aadhaarCard: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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

    }, {
        freezeTableName: true,
        timestamps: true,
        classMethods: {
        }
    })
    UserBankDetail.associate = function (models) {
        UserBankDetail.belongsTo(models.User, {
            foreignKey: "userId"
        })

    }
    return UserBankDetail
}
