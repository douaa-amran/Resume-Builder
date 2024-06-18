import React from 'react'

export default function SummaryForm() {
  return (
    <form class="p-3 flex flex-col justify-center gap-3">
      <div>
        <h1 className="text-3xl font-bold mb-5">Summary</h1>
          <div class="mb-5">
            <label for="summary" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Summary</label>
            <textarea id="summary" rows="10" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Who are you..."></textarea>
          </div>
        </div>
    </form>
  )
}
