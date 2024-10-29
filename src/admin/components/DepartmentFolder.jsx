import React from "react";

export default function DepartmentFolder({ departmentName, children }) {
  return (
    <div className="departmentFolderCon">
      <div>{children}</div>
      <h4>{departmentName}</h4>
    </div>
  );
}
