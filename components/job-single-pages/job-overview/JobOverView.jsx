import moment from "moment";
import { Tag } from "antd";

const JobOverView = (props) => {
  const weekdays = [
    "Sun",
    // "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  const colors = [
    "magenta",
    // "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    
  ];
  return (
    <div className="widget-content">
      <ul className="job-overview">
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Date Posted:</h5>
          <span>{moment(props.postedDate).format("DD-MM-YYYY")}</span>
        </li>
        {/* <li>
          <i className="icon icon-expiry"></i>
          <h5>Expiration date:</h5>
          <span>{moment(props.expirdDate).format("DD-MM-YYYY")}</span>
        </li> */}
        <li>
          <i className="icon icon-location"></i>
          <h5>Location:</h5>
          <span>{props.location}</span>
        </li>
        {/* <li>
          <i className="icon icon-user-2"></i>
          <h5>Job Title:</h5>
          <span>{props.jobTit}</span>
        </li> */}
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Working Days:</h5>
          <span>
            {" "}
            {weekdays.map((day, index) => (
              <Tag style={{fontSize: '12px'}} key={index} color={colors[index % colors.length]}>
                {day}
              </Tag>
            ))}
          </span>
        </li>
        <li>
          <i className="icon icon-clock"></i>
          <h5>Hrs/day:</h5>
          <span>
            9 hrs
            {/* {props.workHours} */}
            </span>
        </li>
        <li>
          <i className="icon icon-rate"></i>
          <h5>Hourly Rate:</h5>
          <span>₹{props.salary}</span>
        </li>
        <li>
          <i className="icon icon-salary"></i>
          <h5>Salary:</h5>
          <span>₹ {props.salary}</span>
        </li>
      </ul>
    </div>
  );
};

export default JobOverView;
