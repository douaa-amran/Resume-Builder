import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveSummary } from '../features/resume/ResumeSlice'; // Assuming you have the slice in this path

export default function SummaryForm() {
  const dispatch = useDispatch();
  const [summary, setSummary] = useState("");

  const handleChange = (e) => {
    setSummary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveSummary(summary));
  };

  return (
    <form className="p-3 flex flex-col justify-center gap-3" onSubmit={handleSubmit}>
      <div>
        <h1 className="text-3xl font-bold mb-5">Summary</h1>
        <div className="mb-5">
          <label htmlFor="summary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Summary
          </label>
          <textarea
            id="summary"
            rows="10"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Who are you..."
            value={summary}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
      <button type="submit" className="text-white p-2 rounded-xl" style={{ background: "#D2649A" }}>
        Save Summary
      </button>
    </form>
  );
}
