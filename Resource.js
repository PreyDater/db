module.exports = function (sequelize, DataTypes) {
    const Resource = sequelize.define('Resource', {
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
        resourceName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        organizationId: {
            type: DataTypes.INTEGER,
            allowNull: false
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
    Resource.associate = function (models) {
        Resource.belongsTo(models.Organization, {
            foreignKey: "organizationId"
        })
        Resource.hasMany(models.Policy, {
            foreignKey: "resourceId"
        })
    }
    return Resource
}
