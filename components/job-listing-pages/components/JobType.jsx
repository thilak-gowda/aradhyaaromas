"use client";
import { useDispatch, useSelector } from "react-redux";
import { addJobType } from "../../../features/filter/filterSlice";
import { jobTypeCheck } from "../../../features/job/jobSlice";

const JobType = () => {
  const { jobTypeList } = useSelector((state) => state.job) || {};
  const dispatch = useDispatch();

  // dispatch job-type
  const jobTypeHandler = (e, id) => {
    dispatch(addJobType(e.target.value));
    dispatch(jobTypeCheck(id));
  };

  return (
    <ul class="job-other-info d-flex">
      <li class="required">Public</li>
      <li class="required">FullTime</li>
      <li class="required">PartTime</li>
    </ul>
  );
};

export default JobType;
