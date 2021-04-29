import { useContext, useState, useEffect, Fragment } from "react";
import { TaskContext } from "../context/task";
import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  COMPLETED_TASK,
} from "../types/tasks";
import { FaTrash, FaCheck } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
const Task = () => {
  // TaskList
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [updateText, setUpdateText] = useState("");
  const [update, setUpdate] = useState(false);
  const [userValue, setUserValue] = useState("");

  const [taskState, dispatch] = useContext(TaskContext);

  const createTask = (e) => {
    e.preventDefault();
    if (text.length !== 0) {
      dispatch({ type: ADD_TASK, payload: text.trim() });
      setError(false);
      setText("");
    } else {
      setError(true);
    }
  };

  const changeTaskText = (e) => {
    setText(e.target.value);
  };

  const changeUpdateTaskText = (e) => {
    setUpdateText(e.target.value);
  };

  const deleteTask = (taskId) => {
    dispatch({ type: DELETE_TASK, payload: taskId });
  };

  const updateTask = (todo) => {
    if (updateText.length !== 0) {
      setUpdate(false);
      setUserValue([]);
      setUpdateText("");
      setError(false);
      dispatch({ type: UPDATE_TASK, payload: { todo, updateText } });
    } else {
      setError(true);
    }
  };

  const completedTask = (task) => {
    dispatch({ type: COMPLETED_TASK, payload: task });
  };

  return (
    <div style={Style}>
      {error ? <p className="error">Le champ est vide</p> : null}
      <form onSubmit={createTask}>
        <input
          placeholder={"Ajouter une tâche"}
          type="text"
          value={text}
          onChange={changeTaskText}
        />
        <button type={"submit"}>Ajouter</button>
      </form>
      <div className="container-tasks">
        {/* TaskList */}
        <div className="container-todo">
          <h3>TaskList :</h3>
          {taskState.tasks && !taskState.tasks.complete ? (
            <Fragment>
              {taskState.tasks.map((task) => {
                return (
                  <Fragment key={task.id}>
                    {update && task.id === userValue.id ? (
                      <Fragment>
                        <input
                          type="text"
                          value={updateText}
                          onChange={changeUpdateTaskText}
                        />
                        <button onClick={() => updateTask(task, updateText)}>
                          <FaCheck />
                        </button>
                      </Fragment>
                    ) : (
                      <div className="container-ta">
                        <p>{task.title}</p>
                        <button
                          onClick={() => {
                            setUpdate(true);
                            setUserValue(task);
                          }}
                        >
                          <BsPencilSquare />
                        </button>
                        <button onClick={() => completedTask(task)}>
                          <FaCheck />
                        </button>
                        <button onClick={() => deleteTask(task.id)}>
                          <FaTrash />
                        </button>
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </Fragment>
          ) : null}
        </div>

        {/* TaskList completed */}
        <div className="container-todo">
          <h3>TaskListCompleted :</h3>
          {taskState.complete ? (
            <Fragment>
              {taskState.complete.map((task) => {
                return (
                  <div className="container-ta">
                    <p className="complete">{task.title}</p>

                    <button onClick={() => deleteTask(task.id)}>
                      <FaTrash />
                    </button>
                  </div>
                );
              })}
            </Fragment>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Style = {
  marginTop: "2em",
  backgroundColor: "lightgrey",
  textAlign: "center",
  padding: "1em",
};

export default Task;
