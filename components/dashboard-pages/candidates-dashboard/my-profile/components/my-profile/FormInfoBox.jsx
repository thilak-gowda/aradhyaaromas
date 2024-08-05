'use client'

import Select from "react-select";
import { useState, useEffect } from "react";

const FormInfoBox = () => {
  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Management", label: "Management" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    phone: "",
    email: "",
    website: "",
    currentSalary: "",
    expectedSalary: "",
    experience: "",
    age: "",
    education: "",
    languages: "",
    categories: [],
    allowInSearch: "",
    description: "",
    logoVideo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSelectChange = (selectedOptions, actionMeta) => {
    setFormData((prevFormData) => ({ ...prevFormData, [actionMeta.name]: selectedOptions }));
  };

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({ ...prevFormData, logoVideo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Perform further actions with formData (e.g., API call)
  };

  useEffect(() => {
    console.log("Form Data Changed: ", formData);
  }, [formData]);

  return (
    <form action="#" className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Jerome"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            placeholder="UI Designer"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="0 123 456 7890"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="creativelayers@example.com"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            placeholder="www.jerome.com"
            required
          />
        </div>

        <div className="form-group col-lg-3 col-md-12">
          <label>Current Salary($)</label>
          <select
            name="currentSalary"
            value={formData.currentSalary}
            onChange={handleInputChange}
            className="chosen-single form-select"
            required
          >
            <option value="">Select</option>
            <option value="40-70 K">40-70 K</option>
            <option value="50-80 K">50-80 K</option>
            <option value="60-90 K">60-90 K</option>
            <option value="70-100 K">70-100 K</option>
            <option value="100-150 K">100-150 K</option>
          </select>
        </div>

        <div className="form-group col-lg-3 col-md-12">
          <label>Expected Salary($)</label>
          <select
            name="expectedSalary"
            value={formData.expectedSalary}
            onChange={handleInputChange}
            className="chosen-single form-select"
            required
          >
            <option value="">Select</option>
            <option value="40-70 K">40-70 K</option>
            <option value="50-80 K">50-80 K</option>
            <option value="60-90 K">60-90 K</option>
            <option value="70-100 K">70-100 K</option>
            <option value="100-150 K">100-150 K</option>
            <option value="120-350 K">120-350 K</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            placeholder="5-10 Years"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Age</label>
          <select
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="chosen-single form-select"
            required
          >
            <option value="">Select</option>
            <option value="23-27 Years">23 - 27 Years</option>
            <option value="24-28 Years">24 - 28 Years</option>
            <option value="25-29 Years">25 - 29 Years</option>
            <option value="26-30 Years">26 - 30 Years</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Education Levels</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleInputChange}
            placeholder="Certificate"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Languages</label>
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleInputChange}
            placeholder="English, Turkish"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Categories </label>
          <Select
            defaultValue={[catOptions[1]]}
            isMulti
            name="categories"
            options={catOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            value={formData.categories}
            onChange={handleSelectChange}
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Allow In Search & Listing</label>
          <select
            name="allowInSearch"
            value={formData.allowInSearch}
            onChange={handleInputChange}
            className="chosen-single form-select"
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"
          ></textarea>
        </div>

        <div className="uploading-outer">
          <div className="uploadButton">
            <input
              className="uploadButton-input"
              type="file"
              name="logoVideo"
              accept="video/*"
              id="upload_logo"
              required
              onChange={handleFileChange}
            />
            <label
              className="uploadButton-button ripple-effect"
              htmlFor="upload_logo"
            >
              {formData.logoVideo ? formData.logoVideo.name : "Self-Introduction Video"}
            </label>
            <span className="uploadButton-file-name"></span>
          </div>
          <div className="text">
            Max file size is 1MB, Suitable files are .mp4, .mov, .avi
          </div>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;
