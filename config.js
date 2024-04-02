module.exports = {
  s3: {
    accessKeyId: process.env.WASABI_KEY_ID,
    secretAccessKey: process.env.WASABI_KEY_SECRET,
    endpoint: 's3.eu-west-2.wasabisys.com', 
    bucket: 'esgi-cloud-exam-bucket-27352', 
  },
  suffix: {
    small: '_small.jpg',
    full: '_full.jpg'
  }
};
