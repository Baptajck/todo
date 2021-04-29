import { useContext, useState, Fragment } from "react";
import { TaskContext } from "../context/task";
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../types/tasks";
import { FaTrash, FaCheck } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
const Task = () => {
  const [text, setText] = useState("");
  const [updateText, setUpdateText] = useState("");
  const [update, setUpdate] = useState(false);
  const [userValue, setUserValue] = useState("");
  const [taskState, dispatch] = useContext(TaskContext);

  const createTask = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TASK, payload: text.trim() });
    setText("");
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
    setUpdate(false);
    setUserValue([]);
    setUpdateText("");
    dispatch({ type: UPDATE_TASK, payload: { todo, updateText } });
  };

  return (
    <div style={Style}>
      <form onSubmit={createTask}>
        <input
          placeholder={"Ajouter une tâche"}
          type="text"
          value={text}
          onChange={changeTaskText}
        />
        <button type={"submit"}>Ajouter</button>
      </form>
      <h3>TaskList :</h3>
      {taskState.tasks ? (
        <Fragment>
          {taskState.tasks.map((task) => {
            return (
              <div className="container-todo" key={task.id}>
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
                  <Fragment>
                    <p>{task.title}</p>
                    <button
                      onClick={() => {
                        setUpdate(true);
                        setUserValue(task);
                      }}
                    >
                      <BsPencilSquare />
                    </button>
                    <button onClick={() => deleteTask(task.id)}>
                      <FaTrash />
                    </button>
                  </Fragment>
                )}
              </div>
            );
          })}
        </Fragment>
      ) : null}
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
