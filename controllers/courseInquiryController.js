const CourseInquiry = require('../models/CourseInquiry');

exports.createCourseInquiry = async (req, res) => {
  try {
    const courseInquiry = new CourseInquiry(req.body);
    await courseInquiry.save();
    res.status(201).json(courseInquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCourseInquiries = async (req, res) => {
  try {
    const courseInquiries = await CourseInquiry.find();
    res.json(courseInquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCourseInquiry = async (req, res) => {
  try {
    const courseInquiry = await CourseInquiry.findById(req.params.id);
    if (!courseInquiry) return res.status(404).json({ error: 'Course Inquiry not found' });
    res.json(courseInquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCourseInquiry = async (req, res) => {
  try {
    const courseInquiry = await CourseInquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!courseInquiry) return res.status(404).json({ error: 'Course Inquiry not found' });
    res.json(courseInquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCourseInquiry = async (req, res) => {
  try {
    const courseInquiry = await CourseInquiry.findByIdAndDelete(req.params.id);
    if (!courseInquiry) return res.status(404).json({ error: 'Course Inquiry not found' });
    res.json({ message: 'Course Inquiry deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};