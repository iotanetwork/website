// Any Config to be used throughout the project is written here

module.exports = {
    server: {
        host: '0.0.0.0',
        port: process.env.PORT || 3000,
        appName: 'ien',
        environment: process.env.environment || 'local',
        nameServer: 'http://localhost:3000'
    },
    ses: {
        accessKeyId: process.env.accessKeyId || '',
        secretAccessKey: process.env.secretAccessKey || '',
        emailFrom: '',
        emailFromName: '',
        region: 'us-east-1',
        adminEmail: ''
    },
    s3: {
        region: 'us-east-1',
        p9FormsBucketName: ''
    },
    fcm: {
        serverKey: ''
    },
    newRelic: {
        licenseKey: process.env.newRelicLicenseKey || ''
    }
};
