const mongoose = require('mongoose');
const Counter = require('./Counter');

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, unique: true },
  name: { type: String, required: true },
  course: { type: String, required: true },
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