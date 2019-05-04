// Twilio Credentials
const accountSid = 'AC5da09ec3c8302ce7e53f3d053abf10c8';
const authToken = '7b936d4fb581ef1d485060aad2f21c42';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    to: '+9779813077033',
    from: '+12728080977',
    body: 'this is dailo bitches',
  },
  (err, message) => {
    console.log(err);
  }
);
