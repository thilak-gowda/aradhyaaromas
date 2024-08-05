"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Sidebar from "./jobStat";
import Image from "next/image";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const [logincheck, setLoginCheck] = useState();

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    // Check for updates to logincheck and profileImage on component mount
    setLoginCheck(localStorage.getItem("userId"));
    // setProfileImage(localStorage.getItem("profileImage"));
  }, []);

  const getLogin = false;

  return (
    // <!-- Main Header-->
    <header
      className={`main-header  ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <Image
                  width={154}
                  height={50}
                  src="/images/logo.png"
                  alt="brand"
                />
              </Link>
            </div>
          </div>
          {/* End .logo-box */}

          <HeaderNavContent />
       
          {/* <!-- Main Menu End--> */}
        </div>
        {/* End .nav-outer */}

        <div className="outer-box">
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            <a
              href="#"
              className={`theme-btn btn-style-three call-modal ${
                getLogin ? "d-block" : "d-none"
              }`}
              data-bs-toggle="modal"
              data-bs-target="#loginPopupModal"
            >
              Login / Register
            </a>
            <Sidebar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader;
