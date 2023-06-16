module.exports = function (sequelize, DataTypes) {
    const GradingTemplateMaster = sequelize.define(
        "GradingTemplateMaster", 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            uuid: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING
            },
            templateJSON: {
                type: DataTypes.JSON,
            },
            organizationId: {
                type: DataTypes.INTEGER,
            },
            createdBy: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            isDeleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            updatedBy: {
                type: DataTypes.INTEGER,
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

                }
            }
        }
    )
    GradingTemplateMaster.associate = (models) => {
        GradingTemplateMaster.hasMany(models.CourseGradingTemplate, {
            foreignKey: 'gradingTemplateMasterId'
        })
    }
   
    return GradingTemplateMaster
}