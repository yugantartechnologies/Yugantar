const mongoose = require('mongoose');
const Counter = require('./Counter');

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, unique: true },
  name: { type: String, required: true },
  email: { type: String },
  mobile: { type: String },
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  address: {
    city: { type: String },
    state: { type: String }
  },
  collegeName: { type: String },
  course: { type: String, required: true },
  branch: { type: String },
  currentSemester: { type: Number },
  passingYear: { type: Number },
  cgpa: { type: Number },
  internshipType: { type: String },
  internshipDuration: { type: String, enum: ['1 month', '3 months', '6 months'] },
  preferredStartDate: { type: Date },
  mode: { type: String, enum: ['Online', 'Offline', 'Hybrid'] },
  type: { type: String, required: true }
}, { timestamps: true });

// Pre-save hook to generate rollNo if not provided
studentSchema.pre('save', async function(next) {
  if (!this.rollNo) {
    const counter = await Counter.findByIdAndUpdate(
      'studentRollNo',
      { $inc: { seq: 100 } },
      { new: true, upsert: true }
    );
    this.rollNo = 'YT' + counter.seq.toString().padStart(4, '0');
  }
  next();
});

module.exports = mongoose.model('Student', studentSchema);