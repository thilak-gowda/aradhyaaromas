import { useDispatch } from "react-redux";
import { useState } from "react";
import { CreateUserData } from "../../../../features/reducer/thunks"; // Ensure you import your action correctly

const FormContent2 = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    numberOfEmployees: "",
    roleInHiring: "",
    website: "",
    username: "",
    howYouHeard: "",
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
            <label>Your company's name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company's name"
              value={values.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Your first Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Your first Name"
              value={values.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Your phone numbers </label>
            <input
              type="number"
              name="mobileNumber"
              placeholder="Phone No"
              value={values.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>How you heard about us </label>
            <select
              name="howYouHeard"
              value={values.howYouHeard}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="Newspaper">Newspaper</option>
              <option value="Internet">Internet</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              id="password-field"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>Your company's number of employees</label>
            <select
              name="numberOfEmployees"
              value={values.numberOfEmployees}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="0-10">0-10</option>
              <option value="10-50">10-50</option>
              <option value="50+">50+</option>
            </select>
          </div>
          <div className="form-group">
            <label>Your last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Your role in the hiring process </label>
            <select
              name="roleInHiring"
              value={values.roleInHiring}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="HR">HR</option>
              <option value="Employer">Employer</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Website</label>
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={values.website}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Username </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
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

export default FormContent2;
