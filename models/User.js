User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure that usernames are unique
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], // Ensure the password is at least 8 characters long
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);
