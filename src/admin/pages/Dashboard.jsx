import React from "react";
import "../styles/AdminDashboard.css";
import ContentRow from "../components/ContentRow.jsx";
import Departments from "../components/Departments.jsx";
import { Charts } from "../components/Charts.jsx";
import UPE from "../components/UPE.jsx";
import Evaluation from "../components/Evaluation.jsx";

function Dashboard() {
  return (
    <div className="adminDashboard">
      {/* <div className="row1">
        <NavBar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
      </div> */}

      <div className="row2">
        <ContentRow />
      </div>
      <div className="row3">
        <Departments />
      </div>
      <div className="row4">
        <div className="row4Item itemOne">
          <Charts />
          <Evaluation />
        </div>
        <div className="row4Item itemTwo">
          <UPE />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
