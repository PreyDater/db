
module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    logo: {
      type: DataTypes.STRING
    },
    programCount: {
      type: DataTypes.INTEGER
    },
    categoryLink : {
      type: DataTypes.STRING
    },
    parentId: {
      type: DataTypes.INTEGER
    },
    path: {
      type: DataTypes.STRING
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      associate() {
        // associations can be defined here
        
      }
    }
  });
  Category.associate = (models) => {
    // associations can be defined here
    Category.belongsTo(models.Organization, { foreignKey: 'organizationId', });
    Category.hasMany(models.CategoryCourseMaster, { foreignKey: 'categoryId', });
    Category.hasMany(models.Category, { foreignKey: 'parentId', });

  };

  return Category
}
