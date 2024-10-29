import React from "react";
import AdminNavigation from "./AdminNavigation";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "../styles/Admin.css";
import Button from "./Button";

export default function SideBar({ setHideSidebar }) {
  function g() {
    console.log("clicked the close button");
    setHideSidebar(false);
  }
  return (
    <div className="adminSidebar">
      <div className="sideBarUp">
        <h1 style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 5vw, 3rem)" }}>
          UMéRA
        </h1>
        <div className="close hideClose" onClick={g}>
          <CloseOutlinedIcon />
        </div>
      </div>
      <AdminNavigation />
      <Button title="Logout" />
    </div>
  );
}
