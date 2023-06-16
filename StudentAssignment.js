module.exports = function (sequelize, DataTypes) {
    const StudentAssignment = sequelize.define(
        "StudentAssignment", 
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
            assignmentDetailId: {
                type: DataTypes.INTEGER
            },
            isDeleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            userId : {
                type: DataTypes.INTEGER,
            },
            submittedDate: {
                type: DataTypes.DATE
            },
            quizId: {
                type: DataTypes.INTEGER,
            },
            assignmentLink: {
                type: DataTypes.STRING
            },
            fileName: {
                type: DataTypes.STRING
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
        },
    )
    StudentAssignment.associate = function(models) {
        StudentAssignment.belongsTo(models.User, {
            foreignKey: 'userId'
        })
        StudentAssignment.belongsTo(models.AssignmentDetails, {
            foreignKey: 'assignmentDetailId'
        })
        StudentAssignment.hasOne(models.Grades, {
            foreignKey: 'studentAssignmentId'
        })
        StudentAssignment.belongsTo(models.Quiz, {
            foreignKey: 'quizId'
        })
    }
    return StudentAssignment
}