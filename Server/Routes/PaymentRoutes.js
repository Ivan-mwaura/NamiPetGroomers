const express = require('express');
const router = express.Router();
const { 
        handlePaymentRequest,
        handleCallback,
        sendSms
    } = require('../Controllers/Payments');

router.route('/payment').post(handlePaymentRequest);
router.route('/callback').post(handleCallback);
router.route('/sms').post(sendSms);

module.exports = router;

