const axios = require('axios');
const twilio = require('twilio');

const consumerKey = 'RmlBhzsANb64JPZVL1EoLD5wJ1KN4dT3hLL0YejoyUAAbchG';
const consumerSecret = '1xGC5r9U5HjUI43cjfUUtIlxsHIbANyUxcHk0M05AhxASgqFguY61qvGC4OaNLUx';
let accessToken = '';

//twilio details
const accountSid = 'AC3b6aeb27b6e82dce56558866cc577445';
const authToken = 'b412ac9975759e6bf2c701bac5e1ad75';
const client = new twilio(accountSid, authToken);

const getAccessToken = async () => {
  const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    accessToken = response.data.access_token;
  } catch (error) {
    //console.error('Error fetching access token:', error);
    res.status(500).json({ error: 'Failed to fetch access token' });
  }
};

// Fetch the access token initially
getAccessToken();

// Function to initiate STK Push
const initiateSTKPush = async (phone, amount) => {
  const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
  const shortcode = '174379';
  const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
  const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
  const password = Buffer.from(shortcode + passkey + timestamp).toString('base64');

  const payload = {
    BusinessShortCode: shortcode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: amount,
    PartyA: phone,
    PartyB: shortcode,
    PhoneNumber: phone,
    CallBackURL: 'https://0f58-102-0-8-22.ngrok-free.app/callback',
    AccountReference: 'Nami PetGroomers',
    TransactionDesc: 'Payment for pet products',
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error initiating STK Push:', error);
    throw error;
  }
};

// Controller function to handle payment requests
const handlePaymentRequest = async (req, res) => {
  const { phone, amount } = req.body;

  // Validate phone number and amount
  if (!phone || !amount) {
    return res.status(400).json({ error: 'Phone number and amount are required' });
  }

  try {
    const response = await initiateSTKPush(phone, amount);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to initiate payment' });
  }
};

// Controller function to handle M-Pesa callbacks
const handleCallback = (req, res) => {
  console.log('Callback received:', req.body);
  res.status(200).send('Callback received');
};

const sendSms = async (req, res) => {
  try {
    const phone = req.body;

    const message = await client.messages.create({
      body: 'Hello from Twilio!',
      from: '+15739833051', // Twilio phone number in E.164 format (e.g., +1234567890)
      to: '+254115971269'      // Recipient phone number in E.164 format (e.g., +254792466341)
    });

    console.log('Message sent successfully:', message.sid);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
}



module.exports = {
  handlePaymentRequest,
  handleCallback,
  sendSms,
};
