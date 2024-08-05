'use client'

import { useState, useEffect } from "react";
import Map from "../../../Map";

const ContactInfoBox = () => {
  const [contactInfo, setContactInfo] = useState({
    country: "Australia",
    city: "Melbourne",
    address: "",
    mapLocation: "",
    latitude: "",
    longitude: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Information Submitted: ", contactInfo);
    // Perform further actions with contactInfo (e.g., API call)
  };

  useEffect(() => {
    console.log("Contact Information Changed: ", contactInfo);
  }, [contactInfo]);

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>Country</label>
          <select
            name="country"
            value={contactInfo.country}
            onChange={handleInputChange}
            className="chosen-single form-select"
            required
          >
            <option>Australia</option>
            <option>Pakistan</option>
            <option>China</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <select
            name="city"
            value={contactInfo.city}
            onChange={handleInputChange}
            className="chosen-single form-select"
            required
          >
            <option>Melbourne</option>
            <option>Karachi</option>
            <option>Beijing</option>
            <option>Tokyo</option>
            <option>Mumbai</option>
          </select>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Complete Address</label>
          <input
            type="text"
            name="address"
            value={contactInfo.address}
            onChange={handleInputChange}
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Find On Map</label>
          <input
            type="text"
            name="mapLocation"
            value={contactInfo.mapLocation}
            onChange={handleInputChange}
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
            required
          />
        </div>

        <div className="form-group col-lg-3 col-md-12">
          <label>Latitude</label>
          <input
            type="text"
            name="latitude"
            value={contactInfo.latitude}
            onChange={handleInputChange}
            placeholder="Latitude"
            required
          />
        </div>

        <div className="form-group col-lg-3 col-md-12">
          <label>Longitude</label>
          <input
            type="text"
            name="longitude"
            value={contactInfo.longitude}
            onChange={handleInputChange}
            placeholder="Longitude"
            required
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <button type="button" className="theme-btn btn-style-three">
            Search Location
          </button>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfoBox;
