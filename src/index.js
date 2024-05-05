

// Create a Lambda handler function
exports.handler = async (event) => {
    // Get the AWS region from the environment variables
    const region = process.env.AWS_REGION;

    // Create a response object
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from AWS Lambda",
            region: region
        }),
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Return the response object
    return response;
};
