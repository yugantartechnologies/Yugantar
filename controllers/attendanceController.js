const Attendance = require('../models/Attendance');

exports.createAttendance = async (req, res) => {
  try {
    const { studentId, markedAt } = req.body;
    
    // Validate and set attendance date
    let attendanceDate;
    if (markedAt) {
      attendanceDate = new Date(markedAt);
      if (isNaN(attendanceDate.getTime())) {
        return res.status(400).json({ error: 'Invalid markedAt date' });
      }
    } else {
      attendanceDate = new Date();
    }
    
    // Set the validated date in req.body
    req.body.markedAt = attendanceDate;
    
    const startOfDay = new Date(attendanceDate.getFullYear(), attendanceDate.getMonth(), attendanceDate.getDate());
    const endOfDay = new Date(attendanceDate.getFullYear(), attendanceDate.getMonth(), attendanceDate.getDate() + 1);
    
    // Check if attendance already exists for this student on this date
    const existingAttendance = await Attendance.findOne({
      studentId: studentId,
      markedAt: { $gte: startOfDay, $lt: endOfDay }
    });
    
    if (existingAttendance) {
      return res.status(400).json({ error: 'Attendance already marked for this student on this date' });
    }
    
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