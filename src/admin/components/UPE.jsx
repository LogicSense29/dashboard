import React from "react";
import DTable from "./DTable";
const tableData = [
  {
    id: 1,
    name: "Gbadebo Wasui",
    department: "Admin",
    productivity: "95%",
  },
  {
    id: 2,
    name: "Odunsi Oluwabukola",
    department: "Portfolio",
    productivity: "90%",
  },
  {
    id: 3,
    name: "Obafemi Awolowo",
    department: "Accounting",
    productivity: "85%",
  },
  {
    id: 4,
    name: "Yetunde Akinrinwale",
    department: "Media",
    productivity: "80%",
  },
  {
    id: 5,
    name: "Yomi Oriwoye",
    department: "Research & Development",
    productivity: "70%",
  },
  {
    id: 6,
    name: "Olowo Fedrick",
    department: "IT",
    productivity: "68%",
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
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Department",
    accessor: "department",
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

export default function UPE() {
  return (
    <>
      <DTable tableData={tableData} tableSet={tableSet} />
    </>
  );
}
