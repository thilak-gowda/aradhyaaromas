"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../../../features/filter/employerFilterSlice";

const LocationBox = () => {
  // const { location } = useSelector((state) => state.employerFilter);
  const [getLocation, setLocation] = useState("");
  const dispath = useDispatch();

  // location handler
  const locationHandler = (e) => {
    dispath(addLocation(e.target.value));
  };

  // useEffect(() => {
  //     setLocation(location);
  // }, [setLocation, location]);

  return (
    <>
      <div className="form-group col-lg-12 col-md-12 col-sm-12 location">
        <span className="icon flaticon-map-locator"></span>
        <input
          type="text"
          name="city"
          placeholder="City or postcode"
          list="city-list"
        />
        <datalist id="city-list">
          <option value="Mumbai" />
          <option value="Delhi" />
          <option value="Bangalore (Bengaluru)" />
          <option value="Hyderabad" />
          <option value="Chennai" />
          <option value="Kolkata" />
          <option value="Pune" />
          <option value="Ahmedabad" />
          <option value="Surat" />
          <option value="Jaipur" />
          <option value="Lucknow" />
          <option value="Kanpur" />
          <option value="Nagpur" />
          <option value="Indore" />
          <option value="Thane" />
          <option value="Bhopal" />
          <option value="Visakhapatnam" />
          <option value="Patna" />
          <option value="Vadodara" />
          <option value="Ludhiana" />
        </datalist>
      </div>
    </>
  );
};

export default LocationBox;
