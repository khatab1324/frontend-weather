import React, { useState } from 'react';

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState(null);
  const [bio, setBio] = useState('');
  const [uploadButtonClicked, setUploadButtonClicked] = useState(false); // Add state for tracking upload button click

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
    setUploadButtonClicked(true); // Set upload button clicked to true when a photo is selected
  };

  const styles = {
    profilePage: {
      fontFamily: 'Arial, sans-serif',
      width:'1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#3b494d',
      color: '#bebebe',
      borderRadius: '10px',
      textAlign: 'center',
      marginTop:'50px',
      marginBottom:'50PX'
    },
    header: {
      marginBottom: '30px',
    },
    profilePictureContainer: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '0 auto 20px',
      border: '5px solid #fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      position: 'relative',
    },
    profilePicture: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    uploadButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '10px',
      backgroundColor: '#405de6',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.3s, opacity 0.3s', 
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: uploadButtonClicked ? '0' : '1', 
    },
    bio: {
      marginBottom: '20px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    form: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#2A3538',
      color: '#333',
      transition: 'background-color 0.3s, color 0.3s',
    },
    saveButton: {
      padding: '12px 20px',
      backgroundColor: '#0095f6',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.profilePage}>
      <div style={styles.header}>
        <h1>Edit Profile</h1>
        <div style={styles.profilePictureContainer}>
          <input id="photoUpload" type="file" accept="image/*" onChange={handlePhotoChange} style={{ ...styles.uploadButton, display: 'none' }} />
          <img src={photo ? URL.createObjectURL(photo) : '/default-profile-picture.jpg'} alt="Profile" style={styles.profilePicture} />
          <label htmlFor="photoUpload" style={styles.uploadButton}>
            Upload Photo
          </label>
        </div>
        <div style={styles.bio}>
          <p>{bio}</p>
        </div>
      </div>
      <div style={styles.form}>
        <label style={styles.label}>Username:</label>
        <input type="text" value={username} onChange={handleInputChange(setUsername)} style={styles.input} />
        <label style={styles.label}>Password:</label>
        <input type="password" value={password} onChange={handleInputChange(setPassword)} style={styles.input} />
        <label style={styles.label}>Email:</label>
        <input type="email" value={email} onChange={handleInputChange(setEmail)} style={styles.input} />
        <label style={styles.label}>Address:</label>
        <input type="text" value={address} onChange={handleInputChange(setAddress)} style={styles.input} />
        <label style={styles.label}>Bio:</label>
        <textarea value={bio} onChange={handleInputChange(setBio)} style={{ ...styles.input, height: '100px' }}></textarea>
      </div>
      <button style={{ ...styles.saveButton }}>
        Save Changes
      </button>
    </div>
  );
};

export default ProfilePage;
