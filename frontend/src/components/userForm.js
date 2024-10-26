import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../features/UserSlice';
import { useNavigate } from 'react-router-dom';

const UserForm = ({ isEditMode = false, user = {} }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [phone, setPhone] = useState(user.phone || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isEditMode) {
      dispatch(updateUser({ id: user.id, name, email, phone }));
    } else {
      const newUser = { id: Date.now().toString(), name, email, phone };
      dispatch(addUser(newUser));
    }
    navigate('/users');
  };

  return (
    <div>
      <h2>{isEditMode ? 'Edit User' : 'Add New User'}</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
      <button onClick={handleSubmit}>{isEditMode ? 'Update User' : 'Add User'}</button>
    </div>
  );
};

export default UserForm;
