import React, { useState } from 'react';
import Select from 'react-select';

const CountryForm = ({ getWeather }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    { label: 'United States', value: 'US', cities: ['New York', 'California', 'Texas'] },
    { label: 'Canada', value: 'CA', cities: ['Ontario', 'Quebec', 'British Columbia'] },
    { label: 'Jordan', value: 'JO', cities: ['Ajloun', 'Amman', 'Aqaba', 'Balqa', 'Irbid', 'Jerash', 'Karak', 'Ma\'an', 'Madaba', 'Mafraq', 'Tafilah', 'Zarqa'] }
  ]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (selectedOption) {
      const country = options.find(option => option.cities.includes(selectedOption.value));
      getWeather(country.value, selectedOption.value);
    } else {
      console.log("Please select a country or city.");
    }
  };

  const filteredOptions = selectedOption ? (options.find(option => option.value === selectedOption.value)?.cities || []).map(city => ({ label: city, value: city })) : [];

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <Select
            id="select"
            name="select"
            value={selectedOption}
            onChange={handleChange}
            options={filteredOptions.length ? filteredOptions : options}
            isClearable
            isSearchable
            placeholder="Select Country or City"
            noOptionsMessage={() => "Please enter your information"}
            selectedOption
          />
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#293438',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
    position: 'relative',
    backgroundColor: '#293438',
  },
};

export default CountryForm;
