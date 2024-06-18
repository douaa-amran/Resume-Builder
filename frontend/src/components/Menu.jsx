import React from 'react';

const Menu = ({ setSelectedSection }) => {
  const sections = [
    { name: 'Personal Info', icon: <i class="fa-solid fa-user" style={{"color":"#D2649A"}}></i> },
    { name: 'Summary', icon: <i class="fa-solid fa-book-open-reader" style={{"color":"#D2649A"}}></i> },
    { name: 'Experience', icon: <i class="fa-solid fa-briefcase" style={{"color":"#D2649A"}}></i> },
    { name: 'Education', icon: <i class="fa-solid fa-school" style={{"color":"#D2649A"}}></i> },
    { name: 'Language', icon: <i class="fa-solid fa-globe" style={{"color":"#D2649A"}}></i> },
    { name: 'Projects', icon: <i class="fa-solid fa-laptop-code" style={{"color":"#D2649A"}}></i> },
    { name: 'Certificates', icon: <i class="fa-solid fa-award" style={{"color":"#D2649A"}}></i> },
    { name: 'Skills', icon: <i class="fa-solid fa-list-check" style={{"color":"#D2649A"}}></i> }
  ];

  return (
    <div className="menu">
      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='font-bold text-2xl'>Fill Section</h1>
        <p>Select the section</p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {sections.map((section, index) => (
          <button key={index} onClick={() => setSelectedSection(section.name)} className="menu-item">
            <span className="menu-icon">{section.icon}</span>
            <span className="menu-label text-sm">{section.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
