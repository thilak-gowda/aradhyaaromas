'use client'

import { useState, useEffect } from "react";

const SocialNetworkBox = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    linkedin: "",
    googlePlus: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevSocialLinks) => ({ ...prevSocialLinks, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Social Links Submitted: ", socialLinks);
    // Perform further actions with socialLinks (e.g., API call)
  };

  useEffect(() => {
    console.log("Social Links Changed: ", socialLinks);
  }, [socialLinks]);

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>Facebook</label>
          <input
            type="url"
            name="facebook"
            value={socialLinks.facebook}
            onChange={handleInputChange}
            placeholder="www.facebook.com/Invision"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Twitter</label>
          <input
            type="url"
            name="twitter"
            value={socialLinks.twitter}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Linkedin</label>
          <input
            type="url"
            name="linkedin"
            value={socialLinks.linkedin}
            onChange={handleInputChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Google Plus</label>
          <input
            type="url"
            name="googlePlus"
            value={socialLinks.googlePlus}
            onChange={handleInputChange}
            placeholder=""
            required
          />
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

export default SocialNetworkBox;
