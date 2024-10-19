const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./src/models/studentModel');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect MongoDB", err));

// API thêm sinh viên
app.post('/api/students', async (req, res) => {
    const { studentID, name, birthDate, gpa, major } = req.body;
    try {
        const newStudent = new Student({ studentID, name, birthDate, gpa, major });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// API lấy danh sách sinh viên
app.get('/api/students', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// API tìm sinh viên theo ID hoặc tên
app.get('/api/students/search', async (req, res) => {
    const { studentID, name } = req.query;
    const query = {};
    if (studentID) query.studentID = studentID;
    if (name) query.name = new RegExp(name, 'i');

    const students = await Student.find(query);
    res.json(students);
});

// API cập nhật thông tin sinh viên
app.put('/api/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// API xóa sinh viên
app.delete('/api/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        res.json({ message: "Student deleted", student });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// API thống kê sinh viên có GPA cao nhất, thấp nhất
app.get('/api/students/statistics', async (req, res) => {
    const highestGpaStudent = await Student.findOne().sort({ gpa: -1 });
    const lowestGpaStudent = await Student.findOne().sort({ gpa: 1 });

    res.json({ highestGpaStudent, lowestGpaStudent });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
