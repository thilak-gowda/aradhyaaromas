"use client";

import jobFeatured from "../../data/job-featured";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../features/reducer/thunks";
import { useEffect } from "react";
import Link from "next/link";

const JobFeatured1 = ({ categoryId }) => { // Receive categoryId as a prop
  const dispatch = useDispatch();
  const {
    productlist,
    loading: productListLoading,
    error: productListError,
  } = useSelector((state) => state.productlist);

  useEffect(() => {
    dispatch(fetchProductData(categoryId)); // Fetch product data based on categoryId
  }, [dispatch, categoryId]);

  return (
    <>
      {productlist?.jobPosts &&
        productlist?.jobPosts?.slice(0, 6).map((item) => (
          <div
            className="job-block-two col-lg-12 col-md-12 col-sm-12"
            key={item.id}
          >
            <div className="inner-box">
              <div className="content">
                <span className="company-logo">
                  <Image
                    width={60}
                    height={59}
                    src={item.logo}
                    alt="item brand"
                  />
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
                    <span className="icon flaticon-money"></span> {item.totalSalary}
                  </li>
                  {/* salary info */}
                </ul>
                {/* End .job-info */}
              </div>
              {/* End .content */}

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
            {/* End inner-box */}
          </div>
        ))}
    </>
  );
};

export default JobFeatured1;
