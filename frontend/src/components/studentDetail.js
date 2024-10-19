import React from 'react';

const StudentDetail = ({ student }) => {
    return (
        <div>
            <strong>Mã sinh viên: </strong> {student.id} <br />
            <strong>Họ tên: </strong> {student.name} <br />
            <strong>Ngày sinh: </strong> {student.birthDate} <br />
            <strong>Điểm trung bình: </strong> {student.gpa} <br />
            <strong>Chuyên ngành: </strong> {student.major}
        </div>
    );
};

export default StudentDetail;
