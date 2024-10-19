import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {
    return (
        <div className="student-list">
            {students.map((student) => (
                <div key={student._id}>
                    <p><strong>Mã sinh viên:</strong> {student.studentID}</p>
                    <p><strong>Họ tên:</strong> {student.name}</p>
                    <p><strong>Ngày sinh:</strong> {student.birthDate}</p>
                    <p><strong>Điểm trung bình:</strong> {student.gpa}</p>
                    <p><strong>Chuyên ngành:</strong> {student.major}</p>
                    <button onClick={() => onEdit(student)}>Sửa</button>
                    <button onClick={() => onDelete(student._id)}>Xóa</button>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default StudentList;
