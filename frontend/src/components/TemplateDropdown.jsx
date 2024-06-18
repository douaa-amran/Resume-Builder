import React, { useState } from 'react';

const TemplateDropdown = ({ setSelectedTemplate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        onClick={() => setIsOpen(!isOpen)}
        style={{"background":"#D2649A"}}
        className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center my-4 w-full"
        type="button"
      >
        Template
        <svg className="w-2.5 h-2.5 ml-64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {isOpen && (
        <div id="dropdown" className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-full ">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <button
                onClick={() => handleTemplateChange('Template1')}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
              >
                Template 1
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTemplateChange('Template2')}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
              >
                Template 2
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTemplateChange('Template3')}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
              >
                Template 3
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TemplateDropdown;
