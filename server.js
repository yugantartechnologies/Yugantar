const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    const inquiryRoutes = require('./routes/inquiryRoutes');
    app.use('/api/inquiries', inquiryRoutes);

    const courseInquiryRoutes = require('./routes/courseInquiryRoutes');
    app.use('/api/course-inquiries', courseInquiryRoutes);

    const internshipInquiryRoutes = require('./routes/internshipInquiryRoutes');
    app.use('/api/internship-inquiries', internshipInquiryRoutes);

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });