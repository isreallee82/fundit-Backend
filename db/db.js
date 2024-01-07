/* eslint-disable operator-linebreak */

const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an Email!'],
    unique: [true, 'Email Exist'],
  },

  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    unique: false,
  },
});

// Define File schema
const fileSchema = new mongoose.Schema({
  // Define file properties here
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  name: String,
  type: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, default: null },
  isPublic: { type: Boolean, default: false },
  localPath: String,
});

// Create User model based on userSchema
const User = mongoose.model('users', userSchema);

// Create File model based on fileSchema
const File = mongoose.model('files', fileSchema);

class DBClient {
  constructor() {
    this.Users = User;
    this.Files = File;
  }

  async nbUsers() {
    const usersNum = await this.Users.countDocuments();
    return usersNum;
  }

  async nbFiles() {
    const filesNum = await this.Files.countDocuments();
    return filesNum;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
