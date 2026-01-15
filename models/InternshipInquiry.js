const mongoose = require('mongoose');

const internshipInquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  internship: { type: String, required: true },
  experience: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('InternshipInquiry', internshipInquirySchema);