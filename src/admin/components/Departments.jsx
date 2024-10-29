import React from "react";
import DTable from "./DTable";

const tableData = [
  {
    id: 1,
    heading: "Departments",
    department: "Admin",
    members: [],
    productivity: "15%",
  },
  {
    id: 1,
    heading: "Departments",
    department: "Portfolio",
    members: [],
    productivity: "20%",
  },
  {
    id: 1,
    heading: "Departments",
    department: "Accounting",
    members: [],
    productivity: "60%",
  },
  {
    id: 1,
    heading: "Departments",
    department: "Media",
    members: [],
    productivity: "40%",
  },
  {
    id: 1,
    heading: "Departments",
    department: "Research & Development",
    members: [],
    productivity: "30%",
  },
  {
    id: 1,
    heading: "Departments",
    department: "IT",
    members: [],
    productivity: "15%",
  },
];

const progressBarCon = {
  // border: "1px #333 solid",
  borderRadius: "5px",
  backgroundColor: "rgba(13, 0, 0, 0.1)",
  height: "5px",
  width: "50px",
};

const progressBar = (width) => {
  const style = {
    borderRadius: "5px",
    height: "100%",
    width: width,
    backgroundColor: "#890709",
  };
  return style;
};

const tableSet = [
  {
    Header: "Departments",
    accessor: "department",
  },
  {
    Header: "Members",
    accessor: "members",
  },
  {
    Header: "Productivity",
    accessor: "productivity",
    Cell: (props) => (
      <div className="p">
        <p>{props.value}</p>
        <div style={progressBarCon}>
          <div style={progressBar(props.value)}></div>
        </div>
      </div>
    ),
  },
];

export default function Departments() {
  return (
    <div className="departments">
      <DTable tableData={tableData} tableSet={tableSet} />
    </div>
  );
}
