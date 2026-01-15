const express = require('express');
const router = express.Router();
const courseInquiryController = require('../controllers/courseInquiryController');

router.post('/', courseInquiryController.createCourseInquiry);
router.get('/', courseInquiryController.getCourseInquiries);
router.get('/:id', courseInquiryController.getCourseInquiry);
router.put('/:id', courseInquiryController.updateCourseInquiry);
router.delete('/:id', courseInquiryController.deleteCourseInquiry);

module.exports = router;