module.exports = function (sequelize, DataTypes) {
  const EventStudentReview = sequelize.define(
    "EventStudentReview",
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
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
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
  EventStudentReview.associate = (models) => {
    // associations can be defined here
    EventStudentReview.belongsTo(models.User, {
      foreignKey: "studentId",
      as: "Student",
    });
    // EventMember.belongsTo(models.Events, { foreignKey: 'createdBy', });
    EventStudentReview.belongsTo(models.Events, { foreignKey: "eventId" });
  };

  return EventStudentReview;
};
