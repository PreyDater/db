module.exports = function (sequelize, DataTypes) {
    const AttendenceTemplate = sequelize.define(
        "AttendenceTemplate",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            uuid: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
                type: DataTypes.STRING,
            },
            templateJSON: {
                type: DataTypes.JSON
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
    AttendenceTemplate.associate = (models) => {
        AttendenceTemplate.belongsTo(models.TermCourse, {
            foreignKey: 'termCourseId'
        })
    }
    return AttendenceTemplate
}