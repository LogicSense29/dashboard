import React, { useState, useEffect } from "react";
import TasksContainer from "./TaskContainer";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useTaskContext } from "../../hooks/useTaskContext";
import { useEmployeeTaskContext } from "../../hooks/useEmployeeTaskContext";
import "../styles/IndividualTask.css";
// import IndividualTaskTable from "./IndividualTaskTable";

export default function IndividualTask() {
  const [addedTaskInput, setAddedTaskInput] = useState("");
  const [showAddTaskCon, setShowAddTaskCon] = useState(false);
  const { addTask, error } = useTaskContext();
  const { task } = useEmployeeTaskContext();

  function showContainer() {
    setShowAddTaskCon(!showAddTaskCon);
  }

  function handleInput(e) {
    const { value } = e.target;
    // setAddedTaskInput((prev) => ({
    //   task_title: value,
    //   task_description: prev.task_description,
    //   task_status: prev.task_status,
    // }));
    setAddedTaskInput(value);
  }

  async function addTaskToDatabase() {
    await addTask(addedTaskInput);
    console.log("Adding task to database:", addedTaskInput);
    setAddedTaskInput("");
    // setShowAddTaskCon(false);
  }

  return (
    <div>
      {/* <IndividualTaskTable /> */}
      <TasksContainer />
      <div className={showAddTaskCon ? "addTaskContainer" : "removeTaskInput"}>
        <input
          name="task_title"
          type="text"
          className="addTaskInput"
          onBlur={() => {
            setShowAddTaskCon(false);
            console.log("Input out");
          }}
          onFocus={() => {
            console.log("Input in ");
          }}
          value={addedTaskInput}
          onChange={handleInput}
        />
        <div className="addTaskButton" onClick={addTaskToDatabase}>
          <AddOutlinedIcon />
        </div>
      </div>
      <div>
        <div
          className={showAddTaskCon ? "removeTaskInput" : "addTaskButton"}
          onClick={showContainer}
        >
          <AddOutlinedIcon />
        </div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
}
