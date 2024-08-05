// components/InteractiveButton.js
"use client";

import React from 'react';
import { toast } from 'react-toastify';

const notify = () => toast("Applied Successfully", { position: "top-center",theme: "light",type: "success" });

const InteractiveButton = () => {
  return (
    <div className="btn-box d-flex justify-content-center">
      <a
        href="#"
        className="theme-btn btn-style-one"
        data-bs-toggle="modal"
        data-bs-target="#applyJobModal"
        onClick={notify}
      >
        Apply For Job
      </a>

    </div>
  );
};

export default InteractiveButton;
