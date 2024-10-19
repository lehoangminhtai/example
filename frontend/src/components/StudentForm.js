import React, { useState } from 'react';

const StudentForm = ({ initialData = {}, onSubmit }) => {
    const [student, setStudent] = useState({
        studentID:  '',
        name: '',
        birthDate:  '',
        gpa:  '',
        major:  ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(student);
    };

    return (
        <form  className="student-form" onSubmit={handleSubmit}>
            <input type="text" name="studentID" placeholder="Mã sinh viên" onChange={handleChange} required />
            <input type="text" name="name" placeholder="Họ tên" value={student.name} onChange={handleChange} required />
            <input type="date" name="birthDate" placeholder="Ngày sinh" value={student.birthDate} onChange={handleChange} required />
            <input type="number" name="gpa" placeholder="Điểm trung bình" value={student.gpa} onChange={handleChange} required />
            <input type="text" name="major" placeholder="Chuyên ngành" value={student.major} onChange={handleChange} required />
            <button type="submit">Lưu</button>
        </form>
    );
};

export default StudentForm;
