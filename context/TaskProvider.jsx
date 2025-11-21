import { createContext, useEffect, useState } from "react";
import { storage, TASKS_STORAGE_KEY } from "../storage";

export const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const getTasks = async () => {
    try {
      const jsonValue = await storage.getItem(TASKS_STORAGE_KEY);
      const loadedData = JSON.parse(jsonValue);
      setIsLoaded(true);

      if (!Array.isArray(loadedData)) {
        return setTasks([]);
      }
      return setTasks(loadedData);
    } catch (e) {

    }
  }

  const storeTasks = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      return await storage.setItem(TASKS_STORAGE_KEY, jsonValue);
    } catch (e) {

    }
  }

  useEffect(() => {
    getTasks();
  }, [])

  useEffect(() => {
    if (isLoaded) {
      storeTasks(tasks);
      getTasks();
    }
  }, [tasks])

  const addTask = (description) => {
    setTasks((oldState) => {
      return [
        ...oldState,
        {
          description,
          id: oldState.length + 1,
          completed: false,
        },
      ]
    })
  };

  const updateTask = (id, newDescription) => {
    setTasks((oldState) => {
      return oldState.map((task) => {
        if (task.id == id) {
          return {
            ...task,
            description: newDescription,
          };
        }
        return task;
      });
    });
  };

  const toggleTaskCompleted = (taskId) => {
    setTasks((oldState) => {
      return oldState.map((task) => {
        if (task.id === taskId) {
          task.completed = !task.completed;
        }
        return task;
      });
    });
  };

  const deleteTask = (taskId) => {
    setTasks((oldState) => {
      return oldState.filter((task) => task.id !== taskId);
    });
  };

  const values = {
    tasks,
    addTask,
    updateTask,
    toggleTaskCompleted,
    deleteTask,
  };

  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  );
};
