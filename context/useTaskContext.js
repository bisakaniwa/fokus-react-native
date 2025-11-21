import { useContext } from "react";
import { TaskContext } from "./TaskProvider";

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('This context can only be accessed within TaskProvider');
  }

  return context;
}
