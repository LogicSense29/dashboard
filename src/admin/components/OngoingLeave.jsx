import React from "react";
import { useTable } from "react-table";
const tableData = [
  {
    id: 1,
    name: "Gbadebo Wasui",
    leave_used: "5 days",
  },
  {
    id: 2,
    name: "Odunsi Oluwabukola",
    leave_used: "3 days",
  },
  {
    id: 3,
    name: "Obafemi Awolowo",
    leave_used: "1 days",
  },
  {
    id: 4,
    name: "Yetunde Akinrinwale",
    leave_used: "2 days",
  },
  {
    id: 5,
    name: "Yomi Oriwoye",
    leave_used: "1 days",
  },
  {
    id: 6,
    name: "Olowo Fedrick",
    leave_used: "4 days",
  },
];

const tableSet = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Leave Used",
    accessor: "leave_used",
  },
];

export default function LeaveRecord() {
  const data = React.useMemo(() => tableData, []);
  const columns = React.useMemo(() => tableSet, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div id="leaveTableContainer">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
