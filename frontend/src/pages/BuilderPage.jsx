import React, { useState } from 'react';
import Certification from '../components/CertificationForm';
import EducationForm from '../components/EducationForm';
import ExperienceForm from '../components/ExperienceForm';
import Header from '../components/Header';
import LanguageForm from '../components/LanguageForm';
import Menu from '../components/Menu';
import PersonalInfoForm from '../components/PersonalInfoForm';
import ProjectsForm from '../components/ProjectsForm';
import SkillForm from '../components/SkillForm';
import SummaryForm from '../components/SummaryForm';
import '../styles/home.css'

export default function BuilderPage() {
  const [selectedSection, setSelectedSection] = useState('Personal Info');

  const renderForm = () => {
    switch (selectedSection) {
      case 'Personal Info':
        return <PersonalInfoForm/>;
      case 'Summary':
        return <SummaryForm/>;
      case 'Experience':
        return <ExperienceForm/>;
      case 'Education':
        return <EducationForm/>;
      case 'Language':
        return <LanguageForm/>;
      case 'Projects':
        return <ProjectsForm/>;
      case 'Certificates':
        return <Certification/>;
      case 'Skills':
        return <SkillForm/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <div className="content-container">
        <Menu setSelectedSection={setSelectedSection} />
        <div className='form'>{renderForm()}</div>
        <div className="cv-preview">CV Preview</div>
      </div>
    </div>
  );
}
