import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCertificate } from '../features/resume/ResumeSlice'; // Adjust the import path as necessary

const Certification = () => {
  const dispatch = useDispatch();

  // State for managing multiple certificates
  const [certificates, setCertificates] = useState([
    { id: 1, title: '', organization: '', date: '' }
  ]);

  // Function to add a new certificate entry
  const addCertificateField = () => {
    setCertificates([...certificates, {
      id: certificates.length + 1,
      title: '',
      organization: '',
      date: ''
    }]);
  };

  // Function to handle input changes in certificate fields
  const handleInputChange = (id, field, value) => {
    setCertificates(certificates.map(cert => cert.id === id ? { ...cert, [field]: value } : cert));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to save all certificates to Redux state
    certificates.forEach(cert => dispatch(addCertificate(cert)));
  };

  return (
    <div className="p-3">
      <h1 className="text-3xl font-bold mb-3">Certificates</h1>
      <form onSubmit={handleSubmit}>
        {certificates.map(({ id, title, organization, date }) => (
          <div key={id} className="mb-5">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`title-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
                  Title
                </label>
                <input
                  type="text"
                  id={`title-${id}`}
                  value={title}
                  onChange={(e) => handleInputChange(id, 'title', e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label htmlFor={`organization-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
                  Organization
                </label>
                <input
                  type="text"
                  id={`organization-${id}`}
                  value={organization}
                  onChange={(e) => handleInputChange(id, 'organization', e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className="mt-3">
              <div>
                <label htmlFor={`date-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
                  Date
                </label>
                <input
                  type="text"
                  id={`date-${id}`}
                  value={date}
                  onChange={(e) => handleInputChange(id, 'date', e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5"
                  required
                />
              </div>
              {/* You can add more fields here if needed */}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addCertificateField}
          className="text-white py-2 px-4 rounded-lg cursor-pointer w-full"
          style={{ background: '#D2649A' }}
        >
          Add Another Certificate
        </button>
        <button
          type="submit"
          className="text-white py-2 px-4 rounded-lg cursor-pointer w-full mt-3"
          style={{ background: '#D2649A' }}
        >
          Save Certificates
        </button>
      </form>
    </div>
  );
};

export default Certification;
