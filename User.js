const { encryptPassword } = require("../../config/encryption");
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(20),
      },
      officialEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      alternateEmail: {
        type: DataTypes.STRING,
      },
      mobileNumber: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      resume :{
        type: DataTypes.STRING,
        allowNull: true,
      },
      token: {
        type: DataTypes.STRING,
      },
      userStatus: {
        type: DataTypes.ENUM("Active", "InActive"),
        defaultValue: "Active",
      },
      lastActiveAt: {
        type: DataTypes.DATE,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bloodGroup: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      motherName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fatherName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      userAddress: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      designation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      onBoarding :{ // first Time User into app 
        type :DataTypes.BOOLEAN,
        defaultValue: false,
      },
      resumeFileName :{
        type: DataTypes.STRING,
        allowNull: true,
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
      hooks: {
        beforeCreate: (user) => {
          user.password = encryptPassword(user.password);
        },
        beforeUpdate: (user) => {
          console.log("in hook", user);
          user.password = encryptPassword(user.password);
        },
      },

      freezeTableName: true,
      timestamps: true,
      classMethods: {
        associate(models) {
          // associations can be defined here
        },
      },
    }
  );
  User.associate = function (models) {
    User.belongsTo(models.Organization, {
      foreignKey: "organizationId",
    }),
    User.hasMany(models.UserRole, {
      foreignKey: "userId",
    });
    User.hasMany(models.UserProgram, {
      foreignKey: "userId",
    });
    User.hasMany(models.UserSection, {
      foreignKey: "userId",
    });
    User.hasMany(models.AssignmentDetails, {
      foreignKey: "createdBy",
    });
    User.hasOne(models.UserProfile, {
      foreignKey: "userId",
    });
    User.hasMany(models.UserExperience, {
      foreignKey: "userId",
    });
    User.hasMany(models.UserEducation, {
      foreignKey: "userId",
    });
    User.hasMany(models.BiddingResponse, {
      as: "Student",
      foreignKey: "userId",
    });
    User.hasMany(models.AssignmentGroup, {
      foreignKey: "studentId",
    });
    User.hasOne(models.Announcement, {
      foreignKey: "createdBy",
    });
    User.hasMany(models.UserCourse, {
      as: "Faculty",
      foreignKey: "userId",
    });
    User.hasMany(models.SessionFaculty, {
      foreignKey: "userId",
    });
    User.hasMany(models.Clubs, {
      foreignKey: "createdBy",
    });
    User.hasMany(models.Clubs, {
      foreignKey: "presidentId",
    });
    User.hasMany(models.Events,{
      foreignKey: "createdBy",
    });
    User.hasMany(models.ClubType, {
      foreignKey: "createdBy",
    });
    User.hasMany(models.ClubMember, {
      foreignKey: "createdBy",
    });
    User.hasMany(models.ClubMember, {
      foreignKey: "userId",
    });
    User.hasMany(models.EventMember, {
      foreignKey: "studentId",
    });
    User.hasMany(models.EventMember, {
      foreignKey: "createdBy",
    });
    User.hasMany(models.EventStudentReview, {
      foreignKey: "studentId",
    });
    User.hasMany(models.StudentAssignment, {
      foreignKey: 'userId'
    }) 
    User.hasMany(models.UserGroup, {
      foreignKey: "userId",
    }); 
    
  };
  return User;
};
