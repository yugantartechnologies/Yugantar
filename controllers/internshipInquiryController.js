const InternshipInquiry = require('../models/InternshipInquiry');

exports.createInternshipInquiry = async (req, res) => {
  try {
    const internshipInquiry = new InternshipInquiry(req.body);
    await internshipInquiry.save();
    res.status(201).json(internshipInquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getInternshipInquiries = async (req, res) => {
  try {
    const internshipInquiries = await InternshipInquiry.find();
    res.json(internshipInquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInternshipInquiry = async (req, res) => {
  try {
    const internshipInquiry = await InternshipInquiry.findById(req.params.id);
    if (!internshipInquiry) return res.status(404).json({ error: 'Internship Inquiry not found' });
    res.json(internshipInquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateInternshipInquiry = async (req, res) => {
  try {
    const internshipInquiry = await InternshipInquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!internshipInquiry) return res.status(404).json({ error: 'Internship Inquiry not found' });
    res.json(internshipInquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteInternshipInquiry = async (req, res) => {
  try {
    const internshipInquiry = await InternshipInquiry.findByIdAndDelete(req.params.id);
    if (!internshipInquiry) return res.status(404).json({ error: 'Internship Inquiry not found' });
    res.json({ message: 'Internship Inquiry deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};