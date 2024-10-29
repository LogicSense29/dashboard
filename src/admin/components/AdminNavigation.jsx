import React, { useState } from "react";
import { Link } from "react-router-dom";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import BorderClearIcon from "@mui/icons-material/BorderClear";
import "../styles/Admin.css";

function AdminNavigation() {
  const [onDashboard, setOnDashboard] = useState(false);

  return (
    <div className="adminNavigation">
      <div>
        <Link
          to="/admin"
          className="adminNav-link"
          onClick={() => {
            setOnDashboard(true);
          }}
        >
          <GridViewOutlinedIcon className="icon" />
          <p>Dashboard</p>
        </Link>
      </div>

      <div>
        <Link
          to="/admin/task"
          className="adminNav-link"
          onClick={() => {
            setOnDashboard(false);
          }}
        >
          <HandymanOutlinedIcon className="icon" />
          <p>Tasks</p>
        </Link>
      </div>
      <div>
        <Link
          to="/admin/leave"
          className="adminNav-link"
          onClick={() => {
            setOnDashboard(false);
          }}
        >
          <ExitToAppOutlinedIcon className="icon" />
          <p>Leave</p>
        </Link>
      </div>
      <div>
        <Link
          to="/admin/inbox"
          className="adminNav-link"
          onClick={() => {
            setOnDashboard(false);
          }}
        >
          <ForwardToInboxOutlinedIcon className="icon" />
          <p>Report</p>
        </Link>
      </div>
      <div>
        <Link
          to="/admin/settings"
          className="adminNav-link"
          onClick={() => {
            setOnDashboard(false);
          }}
        >
          <BorderClearIcon className="icon" />
          <p>UMéRASheet</p>
        </Link>
      </div>
      <div>
        <Link
          to="/admin/settings"
          className="adminNav-link"
          onClick={() => {
            setOnDashboard(false);
          }}
        >
          <SettingsOutlinedIcon className="icon" />
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
}

export default AdminNavigation;
