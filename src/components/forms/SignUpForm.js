import React, { useState } from 'react';
import Select from 'react-select';
import { debounce } from 'lodash';

import countries from './Countries';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    country: null,
    agreeTerms: false,
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (selectedOption) => {
    handleChange('country', selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleSearchChange = debounce((inputValue) => {
    console.log('Searching for:', inputValue);
  }, 300);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#f7f7f7',
      color: '#000',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: '#888',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#000',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#000' : '#fff',
      color: state.isSelected ? '#fff' : '#000',
      '&:hover': {
        backgroundColor: state.isSelected ? '#000' : '#eee',
        color: '#000',
      },
    }),
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#000',
    },
    form: {
      maxWidth: '400px',
      padding: '40px',
      backgroundColor: '#000',
      borderRadius: '10px',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      color: '#fff',
    },
    title: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    inputGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#fff',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#333',
      color: '#fff',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
    },
    checkboxText: {
      marginLeft: '5px',
    },
    submitButton: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#405de6',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Sign Up</h2>
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="country" style={styles.label}>Country:</label>
          <Select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleCountryChange}
            options={countries}
            placeholder="Select Country"
            isSearchable
            onInputChange={handleSearchChange}
            styles={customStyles}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={(e) => handleChange(e.target.name, e.target.checked)}
              required
            />
            <span style={styles.checkboxText}>I agree to the terms and conditions</span>
          </label>
        </div>
        <button type="submit" style={styles.submitButton}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
