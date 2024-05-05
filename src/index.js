// fileUploader.js

const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

class FileUploader {
  constructor(uploadDir) {
    this.uploadDir = uploadDir;
    // Create upload directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
  }

  async uploadFile(fileData) {
    try {
      const { data, filename, mimetype } = fileData;
      const fileId = uuidv4();
      const fileExt = path.extname(filename);
      const filePath = path.join(this.uploadDir, `${fileId}${fileExt}`);
      // Write file to disk
      await fs.promises.writeFile(filePath, data);
      return {
        fileId,
        filename,
        mimetype,
        filePath,
      };
    } catch (error) {
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  }

  async deleteFile(filePath) {
    try {
      // Check if file exists
      if (fs.existsSync(filePath)) {
        // Delete file
        await fs.promises.unlink(filePath);
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }
}

module.exports = FileUploader;
