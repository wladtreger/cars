# File Uploader

File Uploader is a simple Node.js package that allows you to upload files to a specified directory and delete files from that directory.

## Installation

You can install File Uploader via npm:

```bash
npm install file-uploader
```

## Usage

```javascript
const FileUploader = require('file-uploader');

// Initialize FileUploader with upload directory
const uploader = new FileUploader('./uploads');

// Example usage: Upload a file
const fileData = {
  data: <Buffer data>, // Buffer containing file data
  filename: 'example.jpg', // File name
  mimetype: 'image/jpeg' // File MIME type
};

uploader.uploadFile(fileData)
  .then((uploadedFile) => {
    console.log('File uploaded successfully:', uploadedFile);
  })
  .catch((error) => {
    console.error('Error uploading file:', error);
  });

// Example usage: Delete a file
const filePath = './uploads/example.jpg';
uploader.deleteFile(filePath)
  .then((result) => {
    if (result) {
      console.log('File deleted successfully');
    } else {
      console.log('File not found');
    }
  })
  .catch((error) => {
    console.error('Error deleting file:', error);
  });
```

## API

### `new FileUploader(uploadDir: string): FileUploader`

Creates a new instance of FileUploader with the specified upload directory.

- `uploadDir`: The directory where uploaded files will be stored.

### `uploadFile(fileData: Object): Promise<Object>`

Uploads a file to the specified directory.

- `fileData`: An object containing the file data with the following properties:
  - `data`: Buffer containing the file data.
  - `filename`: Name of the file.
  - `mimetype`: MIME type of the file.

Returns a Promise that resolves to an object containing information about the uploaded file, including the generated file ID, filename, MIME type, and file path.

### `deleteFile(filePath: string): Promise<boolean>`

Deletes a file from the specified directory.

- `filePath`: The path to the file to be deleted.

Returns a Promise that resolves to `true` if the file was successfully deleted, or `false` if the file was not found.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
