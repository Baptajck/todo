import { useContext, useState, Fragment } from "react";
import { TaskContext } from "../context/task";
import { NavLink } from "react-router-dom";
import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  COMPLETED_TASK,
  BACK_TO_TASK,
} from "../types/tasks";
import { FaTrash, FaCheck } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { IoArrowUndoSharp } from "react-icons/io5";
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

  const backToTask = (task) => {
    dispatch({ type: BACK_TO_TASK, payload: task });
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
        <div className="form-group">
          <input
            type="text"
            value={text}
            onChange={changeTaskText}
            className="form-control inputT"
            placeholder="Nouveau titre..."
            id="text"
          />
        </div>
        <button className="btn btn-secondary" type={"submit"}>
          Ajouter
        </button>
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
                        <div className="card border-light mb-3">
                          <div className="card-body">
                            <div className="form-group">
                              <input
                                type="text"
                                value={updateText}
                                onChange={changeUpdateTaskText}
                                className="form-control"
                                placeholder="Nouveau titre..."
                                id="text"
                              />
                            </div>
                            <button
                              className="btn btn-secondary"
                              onClick={() => updateTask(task, updateText)}
                            >
                              <FaCheck />
                            </button>
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      <div className="card border-light mb-3">
                        <div className="card-body">
                          <h4 className="card-title">
                            <NavLink
                              to={`/details/${task.id}`}
                              className="btn btn-outline-info"
                            >
                              {task.title}
                            </NavLink>
                            <p className="text-muted mt-2">{task.realTitle}</p>
                            <p className="lead mt-2">{task.description}</p>
                          </h4>
                          <p className="card-text">
                            <button
                              className="btn btn-secondary"
                              onClick={() => {
                                setUpdate(true);
                                setUserValue(task);
                              }}
                            >
                              <BsPencilSquare />
                            </button>
                            <button
                              className="btn btn-success ml-2"
                              onClick={() => completedTask(task)}
                            >
                              <FaCheck />
                            </button>
                            <button
                              className="btn btn-danger ml-2"
                              onClick={() => deleteTask(task.id)}
                            >
                              <FaTrash />
                            </button>
                          </p>
                        </div>
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
                  <div className="card border-light mb-3">
                    <div className="card-body">
                      <p className="complete">{task.title}</p>
                      <p className="card-text">
                        <button
                          className="btn btn-warning"
                          onClick={() => backToTask(task)}
                        >
                          <IoArrowUndoSharp />
                        </button>
                        <button
                          className="btn btn-danger ml-2"
                          onClick={() => deleteTask(task.id)}
                        >
                          <FaTrash />
                        </button>
                      </p>
                    </div>
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
  backgroundColor: "#eee",
  textAlign: "center",
  padding: "1em",
  // maxWidth: "90%",
};

export default Task;
