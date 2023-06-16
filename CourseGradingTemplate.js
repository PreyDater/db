module.exports = function(sequelize, DataTypes) {
    const CourseGradingTemplate = sequelize.define(
        'CourseGradingTemplate', 
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
                defaultValue: DataTypes.UUIDV4
            },
            templateJSON: {
                type: DataTypes.JSON
            },
            gradingTemplateMasterId: {
                type: DataTypes.INTEGER
            },
            termCourseId: {
                type: DataTypes.INTEGER
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
                type: DataTypes.INTEGER
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

    CourseGradingTemplate.associate = (models) => {
        CourseGradingTemplate.belongsTo(models.GradingTemplateMaster, {
            foreignKey: 'gradingTemplateMasterId'
        })
    }
    return CourseGradingTemplate;   
}