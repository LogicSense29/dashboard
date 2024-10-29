import React, { useEffect, useState, useCallback } from "react";
import TasksTable from "./TasksTable";
import Actions from "./Actions";
import "../styles/AdminDashboard.css";
import { useTaskContext } from "../../hooks/useTaskContext";
import { useEmployeeTaskContext } from "../../hooks/useEmployeeTaskContext";

export default function TasksContainer() {
  const { updateTask, loading, error } = useTaskContext();
  const { task } = useEmployeeTaskContext();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (task) {
      setTasks(task);
    }
  }, [task]);

  const handleTitleChange = useCallback((e, index) => {
    console.log(index);
    const { value } = e.target;
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index].task_title = value;
      return newTasks;
    });
  }, []);

  const handleUpdate = useCallback(
    async (id, index) => {
      const updatedTask = tasks[index];
      const infoUpdate = {
        task_id: id,
        task_title: updatedTask.task_title,
      };
      await updateTask(infoUpdate);
    },
    [tasks, updateTask]
  );

  // const date = (props) => {
  //   const value = props.value;
  //   console.log(value);
  //   const len = value.length;
  //   console.log(len);
  //   const date = value.slice(-len, -14);
  //   return date;
  // };

  const statusStyle = (props) => {
    if (props.value === "Ongoing") {
      return (
        <div style={{ color: "blue" }}>
          <p>{props.value}</p>
        </div>
      );
    } else if (props.value === "Completed") {
      return (
        <div style={{ color: "green" }}>
          <p>{props.value}</p>
        </div>
      );
    } else if (props.value === "On Hold") {
      return (
        <div style={{ color: "red" }}>
          <p>{props.value}</p>
        </div>
      );
    } else if (props.value === "In Review") {
      return (
        <div style={{ color: "brown" }}>
          <p>{props.value}</p>
        </div>
      );
    } else if (props.value === "Canceled") {
      return (
        <div style={{ color: "red" }}>
          <p>{props.value}</p>
        </div>
      );
    } else if (props.value === "Postponed") {
      return (
        <div style={{ color: "pink" }}>
          <p>{props.value}</p>
        </div>
      );
    } else if (props.value === "Pending") {
      return (
        <div style={{ color: "pink" }}>
          <p>{props.value}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  const tableSet = React.useMemo(
    () => [
      {
        Header: "Task",
        accessor: "task_title",
        Cell: (props) => (
          <input
            type="text"
            value={props.value}
            className="taskTitleInput"
            onChange={(e) => handleTitleChange(e, props.row.index)}
            onBlur={() => {
              handleUpdate(props.row.original.task_id, props.row.index);
            }}
          />
        ),
      },
      {
        Header: "Start Date",
        accessor: "created_at",
        Cell: ({ value }) => {
          const date = value.slice(0, 10); // Adjusted to get the date part
          return <span>{date}</span>;
        },
      },
      {
        Header: "End Date",
        accessor: "due_date",
      },
      {
        Header: "Status",
        accessor: "task_status",
        Cell: statusStyle,
      },
      {
        Header: "Action",
        accessor: "",
        Cell: <Actions />,
      },
    ],
    [handleTitleChange, handleUpdate, statusStyle]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!task) {
    return <div>Task is Empty</div>;
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "300px",
          width: "clamp(60%, 70%, 80%)",
          border: "1px solid rgba(13,0,0,0.3)",
          borderRadius: "10px",
          margin: "0 auto",
        }}
      >
        <h2>Error: {error}</h2>
        <button
          style={{
            border: "none",
            borderRadius: "10px",
            padding: "5px 10px",
            background: "#890709",
            color: "#f5f5f5",
          }}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div style={{ height: "60vh" }}>
      <TasksTable tableData={tasks} tableSet={tableSet} />
    </div>
  );
}
