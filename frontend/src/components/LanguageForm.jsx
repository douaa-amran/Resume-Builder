import React, { useState } from 'react';

export default function LanguageForm() {
  const [languages, setLanguages] = useState([{ id: 1, language: '', level: '' }]);

  const addLanguageForm = () => {
    setLanguages([...languages, { id: languages.length + 1, language: '', level: '' }]);
  };

  const handleInputChange = (id, field, value) => {
    setLanguages(languages.map(lang => lang.id === id ? { ...lang, [field]: value } : lang));
  };

  return (
    <form className="p-3 flex flex-col justify-center gap-3">
      <h1 className="text-3xl font-bold mb-5">Language Info</h1>
      {languages.map(({ id, language, level }) => (
        <>
        <div key={id} className="grid grid-cols-2 gap-2">
          <div>
            <label
              htmlFor={`language-${id}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Language
            </label>
            <input
              type="text"
              id={`language-${id}`}
              value={language}
              onChange={(e) => handleInputChange(id, 'language', e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor={`level-${id}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Level
            </label>
            <input
              type="text"
              id={`level-${id}`}
              value={level}
              onChange={(e) => handleInputChange(id, 'level', e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        {languages.length !== 1 && <hr className="my-4 border-gray-200" />}
        </>
      ))}
      <button
        type="button"
        onClick={addLanguageForm}
        className="text-white py-2 px-4 rounded-lg cursor-pointer  transition"
        style={{"background":"#D2649A"}}
      >
        Add Another Language
      </button>
    </form>
  );
}
