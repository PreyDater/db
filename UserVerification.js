module.exports = function (sequelize, DataTypes) {
    const UserVerification = sequelize.define(
      'UserVerification',
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
        token: {
          type: DataTypes.STRING,
          allowNull: false
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
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
        // classMethods: {
        //   associate: function (models) {
        //     // associations can be defined here
        //     Role.belongsTo(models.Organization, {
        //       foreignKey: "organizationId"
        //     })
        //   },
        // },
      });
      UserVerification.associate = (models) => {
        // associations can be defined here
        UserVerification.belongsTo(models.User, { foreignKey: 'userId', });
      };
  
    return UserVerification;
  };
  