import React from "react";
import Card from "../components/Card.jsx";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SelectOption from "./SelectOption.jsx";

const cardContent = [
  {
    id: 1,
    title: "Active Task",
    icon: <AssignmentOutlinedIcon />,
    percentage: "70",
    completePer: "5",
  },
  {
    id: 2,
    title: "Achieved Task",
    icon: <AssignmentTurnedInOutlinedIcon />,
    percentage: "20",
    completePer: "5",
  },
  {
    id: 3,
    title: "Departments",
    icon: <GroupOutlinedIcon />,
    percentage: "6",
    completePer: "5",
  },
  {
    id: 4,
    title: "Productivity",
    icon: <ElectricBoltIcon />,
    percentage: "70%",
    completePer: "5%",
  },
];

export default function () {
  return (
    <div className="contentCardRow">
      <div className="item row1CCR">
        <h2 style={{ color: "#fcfcfc" }}>Dashboard</h2>
        <SelectOption />
      </div>
      <div className="item row2CCR">
        {cardContent.map((item) => (
          <Card
            id={item.id}
            title={item.title}
            children={item.icon}
            percentage={item.percentage}
            completePer={item.completePer}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
