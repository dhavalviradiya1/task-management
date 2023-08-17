import "./App.css";
import TodoList from "./component/TodoList";
import TaskManagementContext from "./context/TaskManagementContext";

function App() {
  return (
    <div className="p-10">
      <TaskManagementContext>
        <TodoList />
      </TaskManagementContext>
    </div>
  );
}

export default App;
