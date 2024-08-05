'use client'

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Map from "../../../Map";
import { LoginUserData, ProfileUserData } from "../../../../../features/reducer/thunks";

const PostBoxForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getprofile: getprofileResponse } = useSelector((state) => state.getprofile);

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    emailAddress: "",
    username: "",
    specialisms: [{ value: "Retail", label: "Retail" }],
    jobType: "",
    offeredSalary: "",
    careerLevel: "",
    experience: "",
    gender: "",
    industry: "",
    qualification: "",
    applicationDeadlineDate: "",
    country: "Australia",
    city: "Melbourne",
    completeAddress: "",
    latitude: "",
    longitude: "",
  });

  const specialisms = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  useEffect(() => {
    const userIds = localStorage.getItem("userId");
    dispatch(ProfileUserData(userIds)); 
  }, []);

 

  useEffect(() => {
    const handleLoginResponse = async () => {
      if (getprofileResponse?.User) {
        try {
          console.log(getprofileResponse);
           setFormData({
            jobTitle: getprofileResponse?.User?.jobTitle,
            jobDescription: getprofileResponse?.User?.description,
            emailAddress: getprofileResponse?.User?.email,
            username:getprofileResponse?.User?.firstname,
            specialisms: [{ value: "Retail", label: "Retail" }],
            jobType: getprofileResponse?.User?.jobType,
            offeredSalary: getprofileResponse?.User?.salary,
            careerLevel:getprofileResponse?.User?.careerLevel,
            experience: getprofileResponse?.User?.experience,
            gender: getprofileResponse?.User?.gender,
            industry: getprofileResponse?.User?.industry,
            qualification: getprofileResponse?.User?.qualification,
            applicationDeadlineDate: getprofileResponse?.User?.deadLine,
            country: getprofileResponse?.User?.jobCountry,
            city: getprofileResponse?.User?.jobCity,
            completeAddress: getprofileResponse?.User?.address,
            latitude: getprofileResponse?.User?.jobLatitude,
            longitude: getprofileResponse?.User?.jobLongitude,
          })
        
        } catch (error) {
          console.error("Error handling login response:", error);
        }
      }
    };

    handleLoginResponse();
  }, [getprofileResponse?.User]);

  const handleLogin = async () => {
    const loginData = { email, password };

    await dispatch(LoginUserData(loginData));

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOptions, { name }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOptions,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    handleLogin();
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-12 col-md-12">
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Title"
            value={formData.jobTitle}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Job Description</label>
          <textarea
            name="jobDescription"
            placeholder="Job description"
            value={formData.jobDescription}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Email Address</label>
          <input
            type="email"
            name="emailAddress"
            placeholder=""
            value={formData.emailAddress}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder=""
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Specialisms </label>
          <Select
            defaultValue={formData.specialisms}
            isMulti
            name="specialisms"
            options={specialisms}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleSelectChange}
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Job Type</label>
          <select
            name="jobType"
            className="chosen-single form-select"
            value={formData.jobType}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Banking">Banking</option>
            <option value="Digital & Creative">Digital & Creative</option>
            <option value="Retail">Retail</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Offered Salary</label>
          <select
            name="offeredSalary"
            className="chosen-single form-select"
            value={formData.offeredSalary}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="$1500">$1500</option>
            <option value="$2000">$2000</option>
            <option value="$2500">$2500</option>
            <option value="$3500">$3500</option>
            <option value="$4500">$4500</option>
            <option value="$5000">$5000</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Career Level</label>
          <select
            name="careerLevel"
            className="chosen-single form-select"
            value={formData.careerLevel}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Banking">Banking</option>
            <option value="Digital & Creative">Digital & Creative</option>
            <option value="Retail">Retail</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <select
            name="experience"
            className="chosen-single form-select"
            value={formData.experience}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Banking">Banking</option>
            <option value="Digital & Creative">Digital & Creative</option>
            <option value="Retail">Retail</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Gender</label>
          <select
            name="gender"
            className="chosen-single form-select"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Industry</label>
          <select
            name="industry"
            className="chosen-single form-select"
            value={formData.industry}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Banking">Banking</option>
            <option value="Digital & Creative">Digital & Creative</option>
            <option value="Retail">Retail</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Qualification</label>
          <select
            name="qualification"
            className="chosen-single form-select"
            value={formData.qualification}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Banking">Banking</option>
            <option value="Digital & Creative">Digital & Creative</option>
            <option value="Retail">Retail</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Application Deadline Date</label>
          <input
            type="text"
            name="applicationDeadlineDate"
            placeholder="06.04.2020"
            value={formData.applicationDeadlineDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Country</label>
          <select
            name="country"
            className="chosen-single form-select"
            value={formData.country}
            onChange={handleInputChange}
          >
            <option value="Australia">Australia</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Chaina">Chaina</option>
            <option value="Japan">Japan</option>
            <option value="India">India</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <select
            name="city"
            className="chosen-single form-select"
            value={formData.city}
            onChange={handleInputChange}
          >
            <option value="Melbourne">Melbourne</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Chaina">Chaina</option>
            <option value="Japan">Japan</option>
            <option value="India">India</option>
          </select>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Complete Address</label>
          <input
            type="text"
            name="completeAddress"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
            value={formData.completeAddress}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Find On Map</label>
          <input
            type="text"
            name="findOnMap"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
            value={formData.findOnMap}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-3 col-md-12">
          <label>Latitude</label>
          <input
            type="text"
            name="latitude"
            placeholder="Melbourne"
            value={formData.latitude}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-3 col-md-12">
          <label>Longitude</label>
          <input
            type="text"
            name="longitude"
            placeholder="Melbourne"
            value={formData.longitude}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-three">Search Location</button>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>

        <div className="form-group col-lg-12 col-md-12 text-right d-flex justify-content-end">
          <button className="theme-btn btn-style-one" type="submit">
           Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;
