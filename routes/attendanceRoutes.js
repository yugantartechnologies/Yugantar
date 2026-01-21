const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/', attendanceController.createAttendance);
router.get('/', attendanceController.getAttendances);
router.get('/:id', attendanceController.getAttendance);
router.get('/by-student/:studentId', attendanceController.getAttendanceByStudentId);
router.put('/:id', attendanceController.updateAttendance);
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;