import { TaskProvider } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskSuggestion from "../components/TaskSuggestion";

const Home = () => (
  <TaskProvider>
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <TaskForm />
      <TaskList />
      <TaskSuggestion />
    </div>
  </TaskProvider>
);

export default Home;
