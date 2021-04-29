import { createContext, useReducer } from "react";

import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../types/tasks";

const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const newTask = {
        id: Math.random().toString(16),
        title: action.payload,
        completed: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }

    case UPDATE_TASK: {
      const {
        updateText,
        todo: { id },
      } = action.payload;

      const task = {
        id,
        title: updateText.trim(),
        completed: false,
      };

      const deleteTask = state.tasks.filter((task) => task.id !== id);
      return {
        ...state,
        tasks: [task, ...deleteTask],
      };
    }

    case DELETE_TASK: {
      const updatedTodos = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: [...updatedTodos],
      };
    }
    default:
      return state;
  }
};

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
