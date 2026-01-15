const express = require('express');
const router = express.Router();
const inquiryController = require('../controllers/inquiryController');

router.post('/', inquiryController.createInquiry);
router.get('/', inquiryController.getInquiries);
router.get('/:id', inquiryController.getInquiry);
router.put('/:id', inquiryController.updateInquiry);
router.delete('/:id', inquiryController.deleteInquiry);

module.exports = router;