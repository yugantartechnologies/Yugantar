const Attendance = require('../models/Attendance');

exports.createAttendance = async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.find();
    res.json(attendances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id);
    if (!attendance) return res.status(404).json({ error: 'Attendance not found' });
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!attendance) return res.status(404).json({ error: 'Attendance not found' });
    res.json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndDelete(req.params.id);
    if (!attendance) return res.status(404).json({ error: 'Attendance not found' });
    res.json({ message: 'Attendance deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAttendanceByStudentId = async (req, res) => {
  try {
    const attendances = await Attendance.find({ studentId: req.params.studentId });
    res.json(attendances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};