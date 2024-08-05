import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUserData } from "../../../../features/reducer/thunks"; // import your action

const FormContent = () => {
  const dispatch = useDispatch();
  
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    username: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let body = {
      firstname: values.firstName,
      lastname: values.lastName,
      mobilenumber: values.mobileNumber,
      email: values.email,
      password: values.password,
      UserType: "3",
    };

    // Dispatch the CreateUserData action
    await dispatch(CreateUserData(body));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row d-flex justify-content-evenly">
        <div className="col-6">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone No</label>
            <input
              type="text"
              name="mobileNumber"
              value={values.mobileNumber}
              onChange={handleChange}
              placeholder="Phone No"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email Id"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              id="password-field"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
        </div>
        <div className="form-group mt-4">
          <button className="theme-btn btn-style-one" type="submit">
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormContent;
