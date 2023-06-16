module.exports = function (sequelize, DataTypes) {
    const Events = sequelize.define(
        "Events",
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
            eventName: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          internal_external_event: {
            type: DataTypes.ENUM("internalEvent", "externalEvent", "pending"),
            defaultValue: "internalEvent",
          },
          cover_image: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          description_event: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          fundAmount: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          lastDateToRegister: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          visibility: {
            type: DataTypes.ENUM('visibility_stu', 'visibility_pre'),
            defaultValue:'visibility_stu'
        },
          socialLinks:
          {
              type: DataTypes.JSON,
          },
          reg_require: {
              type: DataTypes.ENUM('required', 'not-required'),
              defaultValue:'required'
          },
          resources: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          support: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          usageOfFund: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          status: {
              type: DataTypes.ENUM('pending', 'approved', 'rejected'),
              defaultValue:'pending'
          },
          eventDate: {
              type: DataTypes.DATE,
          },
          toTime: {
              type: DataTypes.DATE,
          },
          fromTime: {
              type: DataTypes.DATE,
          },
          clubId: {
              type: DataTypes.INTEGER,
          },
            eventDate: {
                type: DataTypes.DATE,
            },
            toTime: {
                type: DataTypes.DATE,
            },
            fromTime: {
                type: DataTypes.DATE,
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
            isDeleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
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
    Events.associate = (models) => {
        // associations can be defined here
        Events.belongsTo(models.User, { foreignKey: 'createdBy' });
        Events.belongsTo(models.Clubs, { foreignKey: 'clubId'});
        // Events.hasMany(models.EventMember, { foreignKey: 'clubId'});
        Events.hasMany(models.EventMember,{  foreignKey: 'eventId' });
        Events.hasMany(models.EventResponseComment,{  foreignKey: 'eventId' });
        Events.hasMany(models.EventPhotos,{  foreignKey: 'eventId' });
        Events.hasMany(models.EventStudentReview,{  foreignKey: 'eventId' });
        // Events.hasMany(models.EventMember,{  foreignKey: 'createdBy', as: 'Creator'});
    };
    return Events;
};
