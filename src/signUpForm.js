import React, { useState } from 'react';
import Select from 'react-select';
import countries from './components/forms/Countries'; // Import the list of countries

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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <Select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleCountryChange}
          options={countries}
          placeholder="Select Country"
          isSearchable
          required
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
            required
          />
          I agree to the terms and conditions
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
