const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    gpa: { type: Number, required: true, min: 0, max: 4 },
    major: { type: String, required: true },
    friend: String,
    category: String,


    class: String,

    teacher: String

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
