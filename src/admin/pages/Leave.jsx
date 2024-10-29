import React from "react";
import "../styles/AdminLeave.css";
import LeaveRecord from "../components/LeaveRecord";
import OngoingLeave from "../components/OngoingLeave";

function Leave() {
  return (
    <div className="leaveContainer">
      {/* <div className="itemsOne">
        <h1>Leave</h1>
      </div> */}
      <div className="itemsTwo">
        <p>Number of Leave - 10</p>
        <p>Plus 5 Extra</p>
        <p>Total - 15</p>
      </div>
      <div className="itemsThree">
        <div className="itemThree_child">
          <h2>Leave Record</h2>
          <LeaveRecord />
        </div>
        <div className="itemThree_child">
          <h2>Ongoing Leave Record</h2>
          <OngoingLeave />
        </div>
      </div>
    </div>
  );
}

export default Leave;
