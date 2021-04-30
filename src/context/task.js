import { createContext, useReducer } from "react";

import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  COMPLETED_TASK,
  CHANGE_TASK,
  BACK_TO_TASK,
} from "../types/tasks";

const initialState = {
  tasks: [],
  complete: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_TASK: {
      const deleteTask = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );

      const newTask = {
        ...action.payload.task[0],
        realTitle: action.payload.desc.title,
        description: action.payload.desc.desc,
      };
      return {
        ...state,
        tasks: [...deleteTask, newTask],
      };
    }

    case ADD_TASK: {
      const newTask = {
        id: Math.floor(Math.random() * 100),
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
      const updatedTodosComplete = state.complete.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: [...updatedTodos],
        complete: [...updatedTodosComplete],
      };
    }

    case BACK_TO_TASK: {
      const { id, title } = action.payload;
      const updatedTask = state.complete.filter((task) => task.id !== id);

      const newTask = {
        id,
        title,
        completed: false,
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask],
        complete: [...updatedTask],
      };
    }

    case COMPLETED_TASK: {
      const { id, title } = action.payload;
      const updatedTask = state.tasks.filter((task) => task.id !== id);

      const completedTask = {
        id,
        title,
        completed: true,
      };

      return {
        ...state,
        tasks: [...updatedTask],
        complete: [...state.complete, completedTask],
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
