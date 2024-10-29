import React from "react";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";

export default function Evaluation() {
  return (
    <div className="evaluation">
      <div>
        <TaskAltOutlinedIcon style={{ color: "rgba(75, 192, 192, 1)" }} />
        <h2>76%</h2>
        <p>Complete</p>
      </div>
      <div>
        <TrendingUpOutlinedIcon style={{ color: "rgba(255, 159, 64, 1)" }} />
        <h2>76%</h2>
        <p>In-Progress</p>
      </div>
      <div>
        <TrendingDownOutlinedIcon style={{ color: "rgba(255, 99, 132, 1)" }} />
        <h2>76%</h2>
        <p>Behind</p>
      </div>
    </div>
  );
}
