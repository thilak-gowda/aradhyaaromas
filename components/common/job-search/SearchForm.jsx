"use client";

import { useRouter } from "next/navigation";

const SearchForm = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-5 col-md-12 col-sm-12">
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="field_name"
            placeholder="Job title, keywords, or company"
          />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
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
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
          <button
            type="submit"
            className="theme-btn btn-style-one"
            onClick={() => router.push("/job-list-v1")}
          >
            <span className="btn-title">Find Jobs</span>
          </button>
        </div>
      </div>
      {/* End .row */}
    </form>
  );
};

export default SearchForm;
