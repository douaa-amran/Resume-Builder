import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from '../features/resume/ResumeSlice'; // Adjust the path as necessary

export default configureStore({
  reducer: {
    resume: resumeReducer,
  },
});
