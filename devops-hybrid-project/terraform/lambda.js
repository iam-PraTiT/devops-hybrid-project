const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    console.log("S3 Event:", JSON.stringify(event));

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "S3 Triggered Lambda"
        })
    };
};