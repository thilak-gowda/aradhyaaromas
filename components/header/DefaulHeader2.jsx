"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Sidebar from "./jobStat";
import Image from "next/image";
import EnterAddrsss from "../home-1/EnterAddrsss";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const [addressVisible, setAddressVisible] = useState(false);

  const handleCloseAddressModal = () => {
    setAddressVisible(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const getLogin = false;

  return (
    // <!-- Main Header-->
    <header
      className={`main-header  ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
    <EnterAddrsss visible={addressVisible} onClose={handleCloseAddressModal} />
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
          <div className="pe-4" onClick={()=>{
            setAddressVisible(!addressVisible)
          }}>
            {" "}
            <i className="fa fa-solid fa-map-marker"> <span className="fw-light">Bangalore</span></i>
          </div>
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

            {/* <Link
              href="/employers-dashboard/post-jobs"
              className="theme-btn btn-style-one"
            >
              Job Post
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader;
