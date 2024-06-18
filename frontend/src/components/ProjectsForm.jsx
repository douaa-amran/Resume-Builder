import React, { useState } from 'react';

const ProjectsForm = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: '', description: '', duration: '', github: '' }
  ]);

  const addProject = () => {
    setProjects([...projects, {
      id: projects.length + 1,
      title: '',
      description: '',
      duration: '',
      github: ''
    }]);
  };

  const handleInputChange = (id, field, value) => {
    setProjects(projects.map(project => project.id === id ? { ...project, [field]: value } : project));
  };

  return (
    <div className="p-3">
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      {projects.map(({ id, title, description, duration, github }) => (
        <>
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
              <label htmlFor={`duration-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
                Duration
              </label>
              <input
                type="text"
                id={`duration-${id}`}
                value={duration}
                onChange={(e) => handleInputChange(id, 'duration', e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5"
                required
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
          <div className="mt-3">
            <label htmlFor={`github-${id}`} className="block mb-2 text-sm font-medium text-gray-900">
              GitHub Repository
            </label>
            <input
              type="text"
              id={`github-${id}`}
              value={github}
              onChange={(e) => handleInputChange(id, 'github', e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        {projects.length !== 1 && <hr className="my-4 border-gray-200" />}
        </>
      ))}
      <button
        type="button"
        onClick={addProject}
        className="text-white py-2 px-4 rounded-lg cursor-pointer w-full"
        style={{ background: '#D2649A' }}
      >
        Add Another Project
      </button>
    </div>
  );
};

export default ProjectsForm;
