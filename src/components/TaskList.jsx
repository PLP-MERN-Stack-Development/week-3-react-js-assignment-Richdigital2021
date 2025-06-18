import { useTasks } from "../hooks/useTasks";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTasks();

  if (tasks.length === 0)
    return <p className="text-center text-gray-500">No tasks yet.</p>;

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
