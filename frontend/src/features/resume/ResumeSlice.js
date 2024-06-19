import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {},
  summary: "",
  experiences: [],
  educations: [],
  languages: [],
  skills: [],
  projects: [],
  certificates: [],
  selectedTemplate: "Template1" 
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    savePersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    saveSummary: (state, action) => {
      state.summary = action.payload;
    },
    addExperience: (state, action) => {
      state.experiences.push(action.payload);
    },
    addEducation: (state, action) => {
      state.educations.push(action.payload);
    },
    addLanguage: (state, action) => {
      state.languages.push(action.payload);
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    addCertificate: (state, action) => {
      state.certificates.push(action.payload);
    },
    setSelectedTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    }
  },
});

export const {
  savePersonalInfo,
  saveSummary,
  addExperience,
  addEducation,
  addLanguage,
  addSkill,
  addProject,
  addCertificate,
  setSelectedTemplate
} = resumeSlice.actions;

export default resumeSlice.reducer;
