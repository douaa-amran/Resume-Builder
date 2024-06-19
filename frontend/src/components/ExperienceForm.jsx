import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExperience } from '../features/resume/ResumeSlice'; // Adjust the import path as necessary

const ExperienceForm = () => {
  const dispatch = useDispatch();
  const [experiences, setExperiences] = useState([
    { id: 1, company: '', position: '', startDate: '', endDate: '', description: '' }
  ]);

  const addNewExperience = () => {
    setExperiences([...experiences, {
      id: experiences.length + 1,
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }]);
  };

  const handleInputChange = (id, field, value) => {
    setExperiences(experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    experiences.forEach(exp => dispatch(addExperience(exp)));
  };

  return (
    <form className="p-3" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold mb-5">Work Experience</h1>
      {experiences.map(({ id, company, position, startDate, endDate, description }) => (
        <div key={id} className="mb-5">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor={`company-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
                Company
              </label>
              <input
                type="text"
                id={`company-${id}`}
                value={company}
                onChange={(e) => handleInputChange(id, 'company', e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor={`position-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
                Position
              </label>
              <input
                type="text"
                id={`position-${id}`}
                value={position}
                onChange={(e) => handleInputChange(id, 'position', e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5"
                required
              />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div>
              <label htmlFor={`startDate-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
                Start Date
              </label>
              <input
                type="text"
                id={`startDate-${id}`}
                value={startDate}
                onChange={(e) => handleInputChange(id, 'startDate', e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5"
                placeholder="MM/YYYY"
                required
              />
            </div>
            <div>
              <label htmlFor={`endDate-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
                End Date
              </label>
              <input
                type="text"
                id={`endDate-${id}`}
                value={endDate}
                onChange={(e) => handleInputChange(id, 'endDate', e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5"
                placeholder="MM/YYYY or Present"
              />
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor={`description-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
              Description
            </label>
            <textarea
              id={`description-${id}`}
              value={description}
              onChange={(e) => handleInputChange(id, 'description', e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5"
              rows="4"
              required
            />
          </div>
          {experiences.length !== 1 && <hr className="my-4 border-gray-200" />}
        </div>
      ))}
      <button
        type="button"
        onClick={addNewExperience}
        className="text-white py-2 px-4 rounded-lg cursor-pointer w-full"
        style={{ background: '#D2649A' }}
      >
        Add Another Experience
      </button>
      <button
        type="submit"
        className="text-white py-2 px-4 rounded-lg cursor-pointer w-full mt-3"
        style={{ background: '#D2649A' }}
      >
        Save Experience
      </button>
    </form>
  );
};

export default ExperienceForm;
