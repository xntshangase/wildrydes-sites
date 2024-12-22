window._config = {
    cognito: {
        userPoolId: 'af-south-1_cHNGrAjOz', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '1ss5i0ubs7bnecp5vmdemraq5c', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'af-south-1' // e.g. us-east-2
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};

// Add this function to calculate SECRET_HASH
function calculateSecretHash(username) {
    const message = username + window._config.cognito.userPoolClientId;
    const key = window._config.cognito.clientSecret;
    
    // Use CryptoJS or similar library to calculate HMAC SHA256
    const hash = CryptoJS.HmacSHA256(message, key);
    return CryptoJS.enc.Base64.stringify(hash);
}
