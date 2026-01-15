const express = require('express');
const router = express.Router();
const internshipInquiryController = require('../controllers/internshipInquiryController');

router.post('/', internshipInquiryController.createInternshipInquiry);
router.get('/', internshipInquiryController.getInternshipInquiries);
router.get('/:id', internshipInquiryController.getInternshipInquiry);
router.put('/:id', internshipInquiryController.updateInternshipInquiry);
router.delete('/:id', internshipInquiryController.deleteInternshipInquiry);

module.exports = router;