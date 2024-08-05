"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAddCardProductById } from "@/features/reducer/thunks";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import JobDetailsDescriptions from "@/components/job-single-pages/shared-components/JobDetailsDescriptions";
import ApplyJobModalContent from "@/components/job-single-pages/shared-components/ApplyJobModalContent";
import { Divider, Steps, ConfigProvider, Popconfirm } from "antd";

const JobListingsTable = () => {
  const { GetAddcardUserRes: jobs } = useSelector(
    (state) => state.GetAddcardUserRes
  );
  const dispatch = useDispatch();
  const [applyId, setApplyId] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    console.log("Video clicked");
    if (videoRef.current) {
      console.log(videoRef.current.paused ? "Playing video" : "Pausing video");
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    let users = localStorage.getItem("userId");
    dispatch(GetAddCardProductById(users));
  }, [dispatch]);

  const handleViewApplication = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    setApplyId(job.product);
  };

  const text = "Are you sure you want to cancel?";
  const description = "Cancel Application";

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Applied Jobs</h4>
        <div className="chosen-outer">
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>

      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Date Applied</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs?.AddCarts?.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <div className="job-block">
                      <div className="inner-box">
                        <div className="content">
                          <span className="company-logo">
                            <Image
                              width={50}
                              height={49}
                              src={item.product.logo}
                              alt="logo"
                            />
                          </span>
                          <h4>
                            <Link href={`/job-single-v3/${item.productid}`}>
                              {item.product.jobTitle}
                            </Link>
                          </h4>
                          <ul className="job-info">
                            <li>
                              <span className="icon flaticon-briefcase"></span>
                              {item.product.company}
                            </li>
                            <li>
                              <span className="icon flaticon-map-locator"></span>
                              {item.product.location}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>Dec 5, 2020</td>
                  <td className="status">Active</td>
                  <td>
                    <div className="option-box">
                      <ul className="option-list">
                        <li>
                          <button
                            onClick={() => handleViewApplication(item)}
                            data-text="View Application"
                          >
                            <span className="la la-eye"></span>
                          </button>
                        </li>
                        <li>
                          <ConfigProvider>
                            <div className="demo">
                              <div>
                                <Popconfirm
                                  placement="top"
                                  title={text}
                                  description={description}
                                  okText="Yes"
                                  cancelText="No"
                                >
                                  <Button
                                    style={{ border: "none" }}
                                    data-text="Delete Application"
                                    className="p-0"
                                  >
                                    <span className="la la-trash"></span>
                                  </Button>
                                </Popconfirm>
                              </div>
                            </div>
                          </ConfigProvider>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedJob && (
        <Modal
          show={showModal}
          size="xl"
          onHide={handleCloseModal}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title>Job Application Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {applyId ? (
              <section className="job-detail-section">
                <div className="upper-box">
                  <div className="auto-container">
                    <div className="job-block-seven">
                      <div className="inner-box">
                        <div className="content">
                          <span className="company-logo">
                            <Image
                              width={100}
                              height={98}
                              src={applyId?.logo}
                              alt="logo"
                            />
                          </span>
                          <h4>{applyId?.jobTitle}</h4>

                          <ul className="job-info">
                            <li>
                              <span className="icon flaticon-briefcase"></span>
                              {applyId?.company}
                            </li>
                            <li>
                              <span className="icon flaticon-map-locator"></span>
                              {applyId?.location}
                            </li>
                            <li>
                              <span className="icon flaticon-clock-3"></span>{" "}
                              {applyId?.time}
                            </li>
                            <li>
                              <span className="icon flaticon-money"></span>{" "}
                              {applyId?.totalSalary}
                            </li>
                          </ul>

                          <ul className="job-other-info">
                            {applyId?.jobType?.map((val, i) => (
                              <li
                                key={i}
                                className={`privacy ${val.styleClass}`}
                              >
                                {val}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="job-detail-outer">
                  <div className="auto-container">
                    <div className="row">
                      <div className="content-column col-lg-8 col-md-12 col-sm-12">
                        <JobDetailsDescriptions
                          description={applyId?.description}
                          keyResponsibilities={applyId?.skills_title}
                          experience={applyId?.experience_title}
                        />
                      </div>

                      <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                        <aside className="sidebar">
                          <div className="sidebar-widget">
                            <h4 className="widget-title">Application Status</h4>
                            <div>
                              <video
                                ref={videoRef}
                                width="100%"
                                controls
                                onClick={handleVideoClick}
                              >
                                <source
                                  src="features/image/self-video.mp4"
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            <div className="widget-content">
                              <Divider />
                              <Steps
                                progressDot
                                current={1}
                                direction="vertical"
                                items={[
                                  {
                                    title: "Submitted",
                                    description:
                                      "Your application has been submitted and is now under review.",
                                  },
                                  {
                                    title: "Reviewed",
                                    description:
                                      "Your application has been reviewed by the hiring team.",
                                  },
                                  {
                                    title: "Interview Scheduled",
                                    description:
                                      "An interview has been scheduled. Please check your email for details.",
                                  },
                                  {
                                    title: "Interview Completed",
                                    description:
                                      "Your interview has been completed. We are currently evaluating your performance.",
                                  },
                                  {
                                    title: "Offer Extended",
                                    description:
                                      "An offer has been extended to you. Congratulations!",
                                  },
                                  {
                                    title: "Rejected",
                                    description:
                                      "Unfortunately, your application has been rejected. Thank you for your interest.",
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Back
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default JobListingsTable;
