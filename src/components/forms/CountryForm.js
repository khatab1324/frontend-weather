import React, { useState } from 'react';
import Select from 'react-select';

const CountryForm = ({ getWeather }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [options, setOptions] = useState([
    { label: 'United States', value: 'US', cities: ['New York', 'California', 'Texas'] },
    { label: 'Canada', value: 'CA', cities: ['Ontario', 'Quebec', 'British Columbia'] },
    { label: 'Jordan', value: 'JO', cities: ['Ajloun', 'Amman', 'Aqaba', 'Balqa', 'Irbid', 'Jerash', 'Karak', 'Ma\'an', 'Madaba', 'Mafraq', 'Tafilah', 'Zarqa'] }
  ]);

  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
    setSelectedCity(null); // Reset city selection when country changes
  };

  const handleCityChange = (selectedCity) => {
    setSelectedCity(selectedCity);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (selectedCity) {
      getWeather(selectedCountry.value, selectedCity.value);
    } else {
      alert("Please select a city."); // Provide a clearer error message
    }
  };

  const countryOptions = options.map(option => ({ label: option.label, value: option.value }));
  const cityOptions = selectedCountry ? options.find(option => option.value === selectedCountry.value)?.cities.map(city => ({ label: city, value: city })) : [];

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <Select
            id="country-select"
            name="country-select"
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countryOptions}
            isClearable
            isSearchable
            placeholder="Select Country"
            aria-label="Select Country" // Provide an aria-label for accessibility
            style={styles.select} // Added style for better alignment
          />
          <Select
            id="city-select"
            name="city-select"
            value={selectedCity}
            onChange={handleCityChange}
            options={cityOptions}
            isClearable
            isSearchable
            placeholder="Select City"
            noOptionsMessage={() => "Please select a country first"}
            isDisabled={!selectedCountry}
            aria-label="Select City" // Provide an aria-label for accessibility
            style={styles.select} // Added style for better alignment
          />
          <button type="submit" style={styles.button}>Get Weather</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '300px', // Increased width for better presentation
    margin: '20px auto', // Added margin for spacing
    padding: '20px',
    backgroundColor: '#293438',
    borderRadius: '8px', // Added border-radius for smoother edges
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the form elements horizontally
  },
  inputGroup: {
    display: 'flex', // Display the inputs and button in a row
    alignItems: 'center', // Center the items vertically
    justifyContent: 'center', // Center the items horizontally
  },
  select: {
    flex: '1', // Let the select inputs take up available space
    marginRight: '10px', // Add some spacing between inputs and button
  },
  button: {
    padding: '10px 20px', // Increased padding for better clickability 
    backgroundColor: '#4285F4', // Changed button color to a blue shade
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Added transition for smoother hover effect
  },
};

export default CountryForm;
