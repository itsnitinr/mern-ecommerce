const { OAuth2Client } = require('google-auth-library');

const googleClient = new OAuth2Client({
  clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
});

module.exports = googleClient;
