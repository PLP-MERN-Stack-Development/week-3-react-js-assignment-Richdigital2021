import { useState } from "react";
import "./App.css";

// Import components
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import TaskSuggestion from "./components/TaskSuggestion";

// import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          {" "}
          <h1 className="text-3xl font-bold">PLP Task Manager</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            {/* Task Manager Component */}
            <TaskManager />

            {/* Suggestion area — only once */}
            <TaskSuggestion />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
