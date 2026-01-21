const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  qrTimestamp: {
    type: String,
    required: true,
  },
  markedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Attendance', attendanceSchema);