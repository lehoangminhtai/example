import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const response = await axios.get('http://localhost:4000/api/students');
        setStudents(response.data);
    };

    const addOrUpdateStudent = async (student) => {
        if (editingStudent) {
            await axios.put(`http://localhost:4000/api/students/${editingStudent._id}`, student);
        } else {
            await axios.post('http://localhost:4000/api/students', student);
        }
        fetchStudents();
        setEditingStudent(null);
    };

    const deleteStudent = async (id) => {
        await axios.delete(`http://localhost:4000/api/students/${id}`);
        fetchStudents();
    };

    const searchStudent = async (searchTerm) => {
        const response = await axios.get(`http://localhost:4000/api/students/search`, { params: { name: searchTerm } });
        setStudents(response.data);
    };

    return (
        <div>
            <div className='centered-container'>
                <h2>Quản lý sinh viên</h2>
                <input type="text" placeholder="Tìm kiếm tên..." onChange={(e) => searchStudent(e.target.value)} />
            </div>
            <StudentForm initialData={editingStudent} onSubmit={addOrUpdateStudent} />
            
            <StudentList students={students} onEdit={setEditingStudent} onDelete={deleteStudent} />
        </div>
    );
};

export default App;
