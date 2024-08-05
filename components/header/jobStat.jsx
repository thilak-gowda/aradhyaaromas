import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
    // setLoginCheck(!!storedUserId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUserId(null);
    setOpen(false); // Close the sidebar menu
    // setLoginCheck(false);
    window.location.reload('/'); // Reload the page to reflect logout
  };


  return (
    <>
      {userId ? (
        <Menu
          customBurgerIcon={
            <div className="header-burgermen" onClick={() => setOpen(!open)}>
               <img
            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/Icons-14.png"
            className="prof-img2 my-3"
            alt="profile"
          />
            </div>
          }
         
          isOpen={open}
        >
          <p className="candidate-name">Sadam</p>

          <img
            src="https://storage.googleapis.com/email-js-1a09b.appspot.com/winterbear/Icons-14.png"
            className="prof-img2 my-3"
            alt="profile"
          />

          <p className="candidate-position">Web developer</p>
          <p className="candidate-education">
            BCA Computers at Seshadripuram First Grade College, Bangalore.
          </p>
          <hr className="bg-secondary" />
          <div className="row d-flex flex-column">
            <Link href="/employers-dashboard/post-jobs" legacyBehavior>
              <a className="theme-btn d-flex justify-content-start ms-0">
                <i className="fa fa-solid fa-user pe-1"></i> My Profile
              </a>
            </Link>

            <Link href="/candidates-dashboard/applied-jobs" legacyBehavior>
              <a className="theme-btn d-flex justify-content-start ms-0">
                <i className="fa fa-solid fa-suitcase pe-1"></i>Applied Jobs
              </a>
            </Link>

            <Link href="/employers-dashboard/post-jobs" legacyBehavior>
              <a className="theme-btn d-flex justify-content-start ms-0">
                <i className="fa fa-solid fa-wrench pe-1"></i> Settings
              </a>
            </Link>

            <Link href="/" legacyBehavior>
              <a className="theme-btn d-flex justify-content-start ms-0" onClick={handleLogout}>
                <i className="fa fa-solid fa-arrow-right pe-1"></i> Log Out
              </a>
            </Link>
          </div>
        </Menu>
      ) : (
        <div className="outer-box">
          <div className="btn-box">
            <Link href="#" legacyBehavior>
              <a
                className="theme-btn btn-style-three call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
                
              >
                Login / Register
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
