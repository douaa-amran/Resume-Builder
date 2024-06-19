import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Certification from "../components/CertificationForm";
import EducationForm from "../components/EducationForm";
import ExperienceForm from "../components/ExperienceForm";
import Header from "../components/Header";
import LanguageForm from "../components/LanguageForm";
import Menu from "../components/Menu";
import PersonalInfoForm from "../components/PersonalInfoForm";
import ProjectsForm from "../components/ProjectsForm";
import SkillForm from "../components/SkillForm";
import SummaryForm from "../components/SummaryForm";
import TemplateDropdown from "../components/TemplateDropdown";
import Template1 from "../components/Template1";
import Template2 from "../components/Template2";
import Template3 from "../components/Template3";
import "../styles/home.css";

export default function BuilderPage() {
  const dispatch = useDispatch();
  const resumeState = useSelector((state) => state.resume);
  const { selectedTemplate: reduxSelectedTemplate } = resumeState; // Rename to avoid conflict

  const [selectedSection, setSelectedSection] = useState("Personal Info");
  const [localSelectedTemplate, setLocalSelectedTemplate] = useState("Template1"); // Rename to avoid conflict
  console.log(localStorage.getItem('token'))

  const handleDownloadResume = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8005/api/pdf/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...resumeState,
          selectedTemplate: localSelectedTemplate // Use localSelectedTemplate here
        }),
      });
      // Handle response as needed (e.g., download PDF)
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const renderForm = () => {
    switch (selectedSection) {
      case "Personal Info":
        return <PersonalInfoForm />;
      case "Summary":
        return <SummaryForm />;
      case "Experience":
        return <ExperienceForm />;
      case "Education":
        return <EducationForm />;
      case "Language":
        return <LanguageForm />;
      case "Projects":
        return <ProjectsForm />;
      case "Certificates":
        return <Certification />;
      case "Skills":
        return <SkillForm />;
      default:
        return null;
    }
  };

  const renderTemplate = () => {
    switch (localSelectedTemplate) { // Use localSelectedTemplate here
      case "Template1":
        return <Template1 />;
      case "Template2":
        return <Template2 />;
      case "Template3":
        return <Template3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <div className="content-container">
        <Menu setSelectedSection={setSelectedSection} />
        <div className="form">{renderForm()}</div>
        <div className="cv-preview">
          {renderTemplate()}
          <TemplateDropdown setSelectedTemplate={setLocalSelectedTemplate} />
          <button
            type="button"
            className="text-white p-2 rounded-lg w-full"
            style={{ background: "#D2649A" }}
            onClick={handleDownloadResume}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
