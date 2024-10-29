import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useEmployeeTaskContext } from "./useEmployeeTaskContext";

export function useTaskContext() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();
  const { dispatch, task } = useEmployeeTaskContext();

  const getTask = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = user.isAdmin
        ? "http://localhost:4000/api/admin/admin-access"
        : "http://localhost:4000/api/task";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();
      // console.log("from The get task", json);

      if (!response.ok) {
        setError(json);
        console.log(json);
        setLoading(false);
        return;
      }

      // Store user session
      localStorage.setItem("task", JSON.stringify(json));
      console.log("Item saved in Local Storage");

      // Update auth context
      dispatch({ type: "GET_TASK", payload: json });
    } catch (err) {
      setError("An error occurred while fetching tasks");
      console.error("This is the error", err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskDetails) => {
    setLoading(true);
    setError(null);

    try {
      const url = user.isAdmin
        ? "http://localhost:4000/api/admin/admin-access"
        : `http://localhost:4000/api/task/${user.id}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ task_title: taskDetails }),
      });

      const json = await response.json();
      console.log("from The add task", json);

      if (!response.ok) {
        setError(json);
        console.log(json);
        setLoading(false);
        return;
      }
      const [j] = json;
      const updatedTask = { ...task, j };
      localStorage.setItem("task", JSON.stringify(updatedTask));
      console.log("Item saved in Local Storage from adding task");

      // Update auth context
      dispatch({ type: "CREATE_TASK", payload: j });

      console.log("after updating", task);
    } catch (err) {
      setError("An error occurred while fetching tasks");
      console.error("This is the error", err);
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (tasks) => {
    setLoading(true);
    setError(null);

    try {
      const url = user.isAdmin
        ? "http://localhost:4000/api/admin/admin-access"
        : `http://localhost:4000/api/task/${tasks.task_id}`;

      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ task_title: tasks.task_title }),
      });

      const json = await response.json();
      console.log("from The add task", json);

      if (!response.ok) {
        setError(json);
        console.log(json);
        setLoading(false);
        return;
      }

      const updatedTask = json;
      const newTasks = task.map((t) =>
        t.task_id === updatedTask.task_id ? updatedTask : t
      );
      localStorage.setItem("task", JSON.stringify(newTasks));
      console.log("Item saved in Local Storage from updating task");

      // Update auth context
      dispatch({ type: "UPDATE_TASK", payload: j });

      console.log("after updating", task);
    } catch (err) {
      setError("An error occurred while fetching tasks");
      console.error("This is the error", err);
    } finally {
      setLoading(false);
    }
  };
  return { getTask, addTask, updateTask, loading, error };
}
