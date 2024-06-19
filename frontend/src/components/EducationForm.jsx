import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEducation } from '../features/resume/ResumeSlice'; // Adjust the import path as necessary

const EducationForm = () => {
  const dispatch = useDispatch();

  // State for managing multiple educations
  const [educations, setEducations] = useState([
    { id: 1, institution: '', degree: '', startDate: '', endDate: '' }
  ]);

  // Function to add a new education entry
  const addEducationField = () => {
    setEducations([...educations, {
      id: educations.length + 1,
      institution: '',
      degree: '',
      startDate: '',
      endDate: ''
    }]);
  };

  // Function to handle input changes in education fields
  const handleInputChange = (id, field, value) => {
    setEducations(educations.map(edu => edu.id === id ? { ...edu, [field]: value } : edu));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to save all educations to Redux state
    educations.forEach(edu => dispatch(addEducation(edu)));
  };

  return (
    <form className="p-3" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold mb-5">Education Information</h1>
      {educations.map(({ id, institution, degree, startDate, endDate }) => (
        <div key={id} className="mb-5">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor={`institution-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
                Institution
              </label>
              <input
                type="text"
                id={`institution-${id}`}
                value={institution}
                onChange={(e) => handleInputChange(id, 'institution', e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor={`degree-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
                Degree/Certificate
              </label>
              <input
                type="text"
                id={`degree-${id}`}
                value={degree}
                onChange={(e) => handleInputChange(id, 'degree', e.target.value)}
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
          {educations.length !== 1 && <hr className="my-4 border-gray-200" />}
        </div>
      ))}
      <button
        type="button"
        onClick={addEducationField}
        className="text-white py-2 px-4 rounded-lg cursor-pointer w-full"
        style={{ background: '#D2649A' }}
      >
        Add Another Education
      </button>
      <button
        type="submit"
        className="text-white py-2 px-4 rounded-lg cursor-pointer w-full mt-3"
        style={{ background: '#D2649A' }}
      >
        Save Education
      </button>
    </form>
  );
};

export default EducationForm;
