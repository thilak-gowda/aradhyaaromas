'use client'

import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductData } from "../../../features/reducer/thunks";
import {
  addCategory,
  addDatePosted,
  addDestination,
  addKeyword,
  addLocation,
  addPerPage,
  addSalary,
  addSort,
  addTag,
  clearExperience,
  clearJobType,
} from "../../../features/filter/filterSlice";
import {
  clearDatePostToggle,
  clearExperienceToggle,
  clearJobTypeToggle,
} from "../../../features/job/jobSlice";

const FilterJobsBox = () => {
  const dispatch = useDispatch();
  const {
    productlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productlist);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  // Example filters
  // Add your filters here based on your Redux state and component requirements

  // Render content dynamically based on API data
  const content = productlist?.jobPosts && productlist?.jobPosts?.slice(0, 6).map((item) => (
    <div className="job-block" key={item.id}>
      <div className="inner-box">
        <div className="content">
          <span className="company-logo">
            <Image width={50} height={49} src={item.logo} alt="item brand" />
          </span>
          <h4>
            <Link href={`/job-single-v1/${item._id}`}>{item.jobTitle}</Link>
          </h4>

          <ul className="job-info">
            <li>
              <span className="icon flaticon-briefcase"></span>
              {item.company}
            </li>
            {/* company info */}
            <li>
              <span className="icon flaticon-map-locator"></span>
              {item.location}
            </li>
            {/* location info */}
            <li>
              <span className="icon flaticon-clock-3"></span> {item.time}
            </li>
            {/* time info */}
            <li>
              <span className="icon flaticon-money"></span> {item.salary}
            </li>
            {/* salary info */}
          </ul>
          {/* End .job-info */}

          <ul className="job-other-info">
            {item.jobType.map((val, i) => (
              <li key={i} className={`required`}>
                {val}
              </li>
            ))}
          </ul>
          {/* End .job-other-info */}

          <button className="bookmark-btn">
            <span className="flaticon-bookmark"></span>
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="ls-switcher">
        <div className="show-result">
          <div className="show-1023">
            <button
              type="button"
              className="theme-btn toggle-filters"
              data-bs-toggle="offcanvas"
              data-bs-target="#filter-sidebar"
            >
              <span className="icon icon-filter"></span> Filter
            </button>
          </div>

          <div className="text">
            Show <strong>{content?.length}</strong> jobs
          </div>
        </div>

        <div className="sort-by">
          {/* Add your filter handlers here */}
          <select className="chosen-single form-select">
            <option value="">Sort by (default)</option>
            <option value="asc">Newest</option>
            <option value="des">Oldest</option>
          </select>

          <select className="chosen-single form-select ms-3">
            <option value="10">10 per page</option>
            <option value="20">20 per page</option>
            <option value="30">30 per page</option>
          </select>
        </div>
      </div>
      {/* End top filter bar box */}
      {content}
      {/* <!-- List Show More --> */}
      <div className="ls-show-more">
        <p>Show 36 of 497 Jobs</p>
        <div className="bar">
          <span className="bar-inner" style={{ width: "40%" }}></span>
        </div>
        <button className="show-more">Show More</button>
      </div>
    </>
  );
};

export default FilterJobsBox;
