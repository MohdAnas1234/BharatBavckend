const express = require('express');
const { createFAQ, getAllFAQs } = require('../controllers/faqController');
const router = express.Router();

router.post('/', createFAQ);
router.get('/', getAllFAQs);

module.exports = router;

