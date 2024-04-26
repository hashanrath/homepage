import React, { useState } from 'react';
import '../pages/userProfileEdit.css';

const UserProfileEdit = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [updateSuccess, setUpdateSuccess] = useState(false); // State for managing the success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement your update logic here, such as calling an API to update the user profile

    // Simulate API call with setTimeout
    setTimeout(() => {
      console.log("Profile updated:", profile);
      
      // Clear the form fields
      setProfile({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        newPassword: '',
        confirmPassword: ''
      });

      // Show success message
      setUpdateSuccess(true);
    }, 500);
  };

  const handleOkClick = () => {
    setUpdateSuccess(false); // Hide success message when 'OK' is clicked
  };

  return (
    <div>
      {updateSuccess && (
        <div className="success-message">
          Profile updated successfully!
          <a href='/userH'><button onClick={handleOkClick}>OK</button></a> {/* OK button to dismiss message */}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={profile.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Current Password:
          <input type="password" name="password" value={profile.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          New Password:
          <input type="password" name="newPassword" value={profile.newPassword} onChange={handleChange} />
        </label>
        <br />
        <label>
          Confirm New Password:
          <input type="password" name="confirmPassword" value={profile.confirmPassword} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfileEdit;
