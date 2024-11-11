export const awsConfig = {
  Auth: {
    Cognito: {
      region: 'YOUR_REGION',
      userPoolId: 'YOUR_USER_POOL_ID',
      userPoolClientId: 'YOUR_CLIENT_ID'
    }
  },
  API: {
    REST: {
      studentAPI: {
        endpoint: 'YOUR_API_GATEWAY_URL',
        region: 'YOUR_REGION'
      }
    }
  }
};