const ServiceBooking = require('../models/ServiceBooking');

exports.createServiceBooking = async (req, res) => {
  try {
    const serviceBooking = new ServiceBooking(req.body);
    await serviceBooking.save();
    res.status(201).json(serviceBooking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServiceBookings = async (req, res) => {
  try {
    const serviceBookings = await ServiceBooking.find();
    res.json(serviceBookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getServiceBooking = async (req, res) => {
  try {
    const serviceBooking = await ServiceBooking.findById(req.params.id);
    if (!serviceBooking) return res.status(404).json({ error: 'Service booking not found' });
    res.json(serviceBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateServiceBooking = async (req, res) => {
  try {
    const serviceBooking = await ServiceBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!serviceBooking) return res.status(404).json({ error: 'Service booking not found' });
    res.json(serviceBooking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteServiceBooking = async (req, res) => {
  try {
    const serviceBooking = await ServiceBooking.findByIdAndDelete(req.params.id);
    if (!serviceBooking) return res.status(404).json({ error: 'Service booking not found' });
    res.json({ message: 'Service booking deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};