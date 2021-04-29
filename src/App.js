import "./App.css";
import TaskComponent from "./component/TaskComponent";
import { TaskProvider } from "./context/task";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <TaskComponent />
      </TaskProvider>
    </div>
  );
}

export default App;
