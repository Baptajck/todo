import { useContext } from "react";
import { TaskContext } from "../context/task";
import { NavLink } from "react-router-dom";
import { CHANGE_TASK } from "../types/tasks";

const TaskDetails = () => {
  const [taskState, dispatch] = useContext(TaskContext);
  const { tasks } = taskState;
  const taskIdUrl = window.location.hash.split("/")[3];
  const task = tasks.filter((t) => +t.id === +taskIdUrl);

  const createTitle = (e) => {
    e.preventDefault();
    console.log(e.target);
    dispatch({
      type: CHANGE_TASK,
      payload: {
        id: +taskIdUrl,
        desc: { title: e.target[0].value, desc: e.target[1].value },
        task,
      },
    });
  };
  console.log(task);
  return (
    <div className="container col-lg-8 offset-lg-1">
      <NavLink to="/" className="btn btn_link">
        Revenir à la liste
      </NavLink>
      <h1>{task[0].title}</h1>
      <form onSubmit={createTitle}>
        <div className="form-group">
          <label className="col-form-label" htmlFor="inputDefault">
            Titre
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={task[0].realTitle}
            minLength="1"
            id="inputDefault"
          />
        </div>

        <div className="form-group mt-5">
          <label htmlFor="exampleTextarea">Description</label>
          <textarea
            className="form-control"
            id="exampleTextarea"
            rows="3"
            placeholder={task[0].description}
            minLength="1"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary">
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

export default TaskDetails;
