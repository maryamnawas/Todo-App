import TodoList from "./components/TodoList";
import { FaPen,FaClipboardList  } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
        <FaPen/>
        <h1>What To Do</h1>
        <FaClipboardList />
        </div>
     
      </div>
      <TodoList />
    </div>
  );
}

export default App;
