import "./App.css";
import TaskComponent from "./component/TaskComponent";
import HomeComponent from "./component/HomeComponent";
import TaskDetails from "./component/TaskDetails.jsx";
import { TaskProvider } from "./context/task";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HomeComponent />
      <Switch>
        <TaskProvider>
          <Route path="/details/:id" component={TaskDetails} />
          <Route exact path="/" component={TaskComponent} />
        </TaskProvider>
        /{" "}
      </Switch>
    </div>
  );
}

export default App;
