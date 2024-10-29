import React, { useState, useEffect } from "react";
import DepartmentFolder from "../components/DepartmentFolder";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import "../styles/AdminTask.css";
import IndividualTask from "../components/IndividualTask";
import { useAuthContext } from "../../hooks/useAuthContext";

const departmentList = [
  "Admin",
  "Portfolio",
  "Accounting",
  "Research & Development",
  "Media",
  "IT",
];

function Task() {
  // const [showIndividualTask, setShowIndividualTask] = useState(false);
  // const { getTask } = useTaskContext();
  // const { task } = useEmployeeTaskContext();
  const { user } = useAuthContext();

  return (
    <div className="adminTaskDashboard">
      {/* {user.isAdmin && (
        <div className="fc-atd">
          {departmentList.map((item, index) => (
            <DepartmentFolder key={index} departmentName={item}>
              <FolderOutlinedIcon />
            </DepartmentFolder>
          ))}
        </div>
      )} */}
      <div className="fc-atd">
        {departmentList.map((item, index) => (
          <DepartmentFolder key={index} departmentName={item}>
            <FolderOutlinedIcon />
          </DepartmentFolder>
        ))}
      </div>
      <div className="sc-atd">
        <IndividualTask />
      </div>
    </div>
  );
}

export default Task;
