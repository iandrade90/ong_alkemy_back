const AWS = require('aws-sdk');
const config = require('../config/config').development;

// config
const s3 = new AWS.S3({
    accessKeyId: config.aws_access_key_id,
    secretAccessKey: config.aws_secret_access_key
});

// Get file
exports.getFile = async(file) => {        
    return `https://${config.bucketname}.s3.amazonaws.com/ong-team-63/${file}`;
}

// Upload File
exports.uploadFile = async(file) => {        
    const params = {
        Bucket: config.bucketname,
        Key: `ong-team-63/${file.file.img.name}`,
        Body: file.file.img.data
    }

    return s3.putObject(params).promise();
}

// Delete file
exports.deleteFile = async(file) => {      
    const params = {
        Bucket: config.bucketname,
        Key: `ong-team-63/${file}`
    }

    return s3.deleteObject(params).promise();
}
