// src/components/TaskSuggestion.jsx
import React from "react";
import { useSuggestionApi } from "../hooks/useSuggestionApi";
import { useTasks } from "../hooks/useTasks";

const TaskSuggestion = () => {
  const { suggestion, fetchSuggestion, loading, error } =
    useSuggestionApi("advice");

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50 dark:bg-gray-700">
      <h3 className="text-lg font-semibold mb-2">Need inspiration?</h3>

      <button
        onClick={fetchSuggestion}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Fetching..." : "Get an Advice"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {!loading && suggestion && (
        <div className="mt-4">
          <p className="italic mb-2">💡 {suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default TaskSuggestion;
