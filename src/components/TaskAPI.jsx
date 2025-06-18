// src/components/TaskAPI.jsx
import React from "react";
import { useBoredApi } from "../hooks/useSuggestionApi";
import { useTasks } from "../hooks/useTasks";

export default function TaskAPI() {
  const { suggestion, fetchSuggestion, loading, error } = useBoredApi();
  const { addTask } = useTasks();

  const handleAdd = () => {
    if (suggestion) {
      addTask(suggestion);
    }
  };

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50 dark:bg-gray-700">
      <h3 className="text-lg font-semibold mb-2">Need inspiration?</h3>

      <Button
        onClick={fetchSuggestion}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Fetching..." : "Suggest a Task"}
      </Button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {suggestion && !loading && (
        <div className="mt-4">
          <p className="italic mb-2">💡 {suggestion}</p>
          <Button
            onClick={handleAdd}
            className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
          >
            Add to My Tasks
          </Button>
        </div>
      )}
    </div>
  );
}
