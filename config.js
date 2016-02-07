var config = {}

config.host = process.env.HOST || "https://dxddb.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "1fn+QHMexpQT1vzH9S3u8b8frjS97qQVcYUo2/iw46EkviIzjuuyaf4PVRmaW+sNa45y8kRIScQh+WRO2NOazg==";
config.databaseId = "ddbupa";
config.collectionId = "feedbacks";

module.exports = config;