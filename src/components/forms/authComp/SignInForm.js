import React, { useState } from "react";
import { useFetchuserQuery } from "../../../Store";
const SignInForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [skip, setSkip] = useState(true);
  const { data, error, isLoading } = useFetchuserQuery(
    { username: formData.username, password: formData.password },
    {
      skip,
    }
  );
  if (isLoading) {
    console.log("isLoading");
  } else if (error) {
    console.log(error);
  } else {
    sessionStorage.setItem("username", formData.username);
    console.log(data);
  }
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sessionStorage.removeItem("usrename");
    setSkip((prev) => false);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <style>{`
          /* General styles */
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #2A3538;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          /* Form styles */
          .form {
            width: 400px;
            padding: 40px;
            background-color: #3B494E;
            border-radius: 10px;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
            color: #BEBEBE;
            transition: transform 0.3s ease;
          }

          .form:hover {
            transform: translateY(-5px);
          }

          .title {
            text-align: center;
            margin-bottom: 30px;
            font-size: 24px;
            font-weight: bold;
          }

          .inputGroup {
            margin-bottom: 20px;
          }

          .label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            text-transform: uppercase;
          }

          .input {
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #ccc;
            background-color: #2A3538;
            color: #BEBEBE;
            transition: border-color 0.3s ease;
          }

          .input:focus {
            outline: none;
            border-color: #405de6;
          }

          .submitButton {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            background-color: #405de6;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .submitButton:hover {
            background-color: #3b55c4;
          }
        `}</style>
        <h2 className="title">Sign In</h2>
        <div className="inputGroup">
          <label htmlFor="username" className="label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="submitButton">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
