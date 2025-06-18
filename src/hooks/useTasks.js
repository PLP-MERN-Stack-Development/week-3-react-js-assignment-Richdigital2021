import { useContext } from 'react';
import { TaskContext, TaskProvider } from '../context/TaskContext';

export const useTasks = () => useContext(TaskContext);


