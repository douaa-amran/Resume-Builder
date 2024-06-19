import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSkill } from "../features/resume/ResumeSlice"; // Adjust the import path as necessary

export default function SkillForm() {
  const dispatch = useDispatch();

  const [skills, setSkills] = useState([{ id: 1, skill: "", level: "" }]);

  const addSkillForm = () => {
    setSkills([...skills, { id: skills.length + 1, skill: "", level: "" }]);
  };

  const handleInputChange = (id, field, value) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to save all skills to Redux state
    skills.forEach((skill) => dispatch(addSkill(skill)));
    // Optionally, you may want to clear the form or perform other actions after saving
  };

  return (
    <form className="p-3 flex flex-col justify-center gap-3" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold mb-5">Skill Info</h1>
      {skills.map(({ id, skill, level }) => (
        <div key={id} className="grid grid-cols-2 gap-2">
          <div>
            <label
              htmlFor={`skill-${id}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark"
            >
              Skill
            </label>
            <input
              type="text"
              id={`skill-${id}`}
              value={skill}
              onChange={(e) => handleInputChange(id, "skill", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5 dark"
              required
            />
          </div>
          <div>
            <label
              htmlFor={`level-${id}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark"
            >
              Level
            </label>
            <input
              type="text"
              id={`level-${id}`}
              value={level}
              onChange={(e) => handleInputChange(id, "level", e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 block w-full p-2.5 dark"
              required
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addSkillForm}
        className="text-white py-2 px-4 rounded-lg cursor-pointer transition"
        style={{ background: "#D2649A" }}
      >
        Add Another Skill
      </button>
      <button
        type="submit"
        className="text-white py-2 px-4 rounded-lg cursor-pointer transition mt-3"
        style={{ background: "#D2649A" }}
      >
        Save Skills
      </button>
    </form>
  );
}
