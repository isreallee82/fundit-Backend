const mongoose = require('mongoose');

// Define File schema
const FileSchema = new mongoose.Schema({
  // Define file properties here
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  name: String,
  type: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, default: null },
  isPublic: { type: Boolean, default: false },
  localPath: String,
});

module.exports = mongoose.model('files', FileSchema);
