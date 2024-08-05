const JobDetailsDescriptions = (props) => {
  return (
    <div className="job-detail">
      <h4>Job Description</h4>
      <p>
        {props.description}
      </p>
      <h4>Key Responsibilities</h4>
      <p>
        {props.keyResponsibilities}
      </p>

      <h4>
        Experience
      </h4>
      <p>
        {props.experience}
      </p>
    </div>
  );
};

export default JobDetailsDescriptions;
