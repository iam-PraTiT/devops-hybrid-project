const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const id = "1";

    await dynamo.put({
        TableName: "devops-table",
        Item: {
            id: id,
            message: "Hello from DynamoDB 🚀"
        }
    }).promise();

    const data = await dynamo.get({
        TableName: "devops-table",
        Key: { id: id }
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(data.Item)
    };
};