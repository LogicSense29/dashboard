import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const actionStyle = {
  display: "flex",
  gap: "5px",
};

const deleteTask = {
  clipPath: "circle()",
  color: "rgba(137,7,9)",
  background: "rgba(137,7,9,0.1)",
  padding: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const editTask = {
  clipPath: "circle()",
  color: "rgba(7,137,135)",
  background: "rgba(7,137,135,0.1)",
  padding: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Actions() {
  return (
    <div style={actionStyle} className="edit">
      <div style={editTask}>
        <EditOutlinedIcon style={{ fontSize: "25px" }} />
      </div>
      <div style={deleteTask} className="delete">
        <DeleteOutlinedIcon style={{ fontSize: "25px" }} />
      </div>
    </div>
  );
}
