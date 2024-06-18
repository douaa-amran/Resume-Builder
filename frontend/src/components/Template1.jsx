import React from "react";
import profile from "./profile.webp"

const Template1 = () => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      style={{ width: "370px" }}
    >
      <div className="flex">
        <div className="w-1/3 bg-blue-800 text-white p-2">
          <div className="flex items-center justify-center ">
            <img
              className="w-10 h-10 rounded-full mt-3"
              src={profile}
              alt="Profile"
            />
          </div>
          <div className="text-center mt-3">
            <h2 className="text-xs font-semibold">Hani Husamuddin</h2>
            <p style={{ fontSize: "8px" }}>Frontend Developer</p>
          </div>
          <div className="mt-2">
            <p
              style={{
                color: "black",
                fontSize: "8px",
                background: "#E5E5E5",
                borderRadius: "10px",
                padding: "4px",
                textAlign: "center",
              }}
            >
              <strong>Surakarta, December 2, 1994</strong>
            </p>
            <p
              style={{
                color: "black",
                fontSize: "8px",
                background: "#E5E5E5",
                borderRadius: "10px",
                padding: "4px",
                marginTop: "4px",
                textAlign: "center",
              }}
            >
              <strong>+62 822 2045 4652</strong>
            </p>
            <p
              style={{
                color: "black",
                fontSize: "8px",
                background: "#E5E5E5",
                borderRadius: "10px",
                padding: "4px",
                marginTop: "4px",
                textAlign: "center",
              }}
            >
              <strong>hani.husam@gmail.com</strong>
            </p>
            <p
              style={{
                color: "black",
                fontSize: "8px",
                background: "#E5E5E5",
                borderRadius: "10px",
                padding: "4px",
                marginTop: "4px",
                textAlign: "center",
              }}
            >
              <strong>Yogyakarta, Indonesia</strong>
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xs font-semibold mb-1">Certificates</h3>
            <div style={{ fontSize: "8px" }}>
              <div className="flex font-bold">
                <p>Best Graduated</p>
                <p className="ml-8">2019</p>
              </div>
              <p className="mt-1">
                Included in one of the award recipients of the best.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xs font-semibold">Languages</h3>
            <div className="flex justify-between mr-2" style={{ fontSize: "8px" }}>
              <p>French</p>
              <p>B1</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xs font-semibold">Skills</h3>
            <div className="flex justify-between mr-2" style={{ fontSize: "8px" }}>
              <p>Team work</p>
              <p>Good</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xs font-semibold">Links</h3>
            <ul>
              <li>
                <a href="#" className="text-blue-400 text-xs">
                <i class="fa-brands fa-linkedin mr-2"></i>LinkedIn
                </a>
              </li>
              <li className="mt-1">
                <a href="#" className="text-blue-400 text-xs">
                <i class="fa-brands fa-github mr-2"></i>GitHub
                </a>
              </li>
              <li className="mt-1">
                <a href="#" className="text-blue-400 text-xs">
                <i class="fa-brands fa-instagram mr-2"></i>Instagram
                </a>
              </li>
              <li className="mt-1">
                <a href="#" className="text-blue-400 text-xs">
                <i class="fa-solid fa-link" mr-2></i>Website
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/3 p-2">
          <div className="mb-4">
            <h2 className="text-sm font-bold">About</h2>
            <hr className="h-1 w-12 bg-cyan-950 rounded-3xl" />
            <p className="mt-2" style={{ fontSize: "8px" }}>
              I have a background in information technology, with a focus on
              frontend development and UI design. I am the type of person who
              seizes every opportunity to learn something new. That is why I
              enjoy challenges. From there, I’m under pressure to learn quickly
              and gain a lot of new experience.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-sm font-bold">Education</h2>
            <hr className="h-1 w-12 bg-cyan-950 rounded-3xl" />
            <p className="mt-2" style={{ fontSize: "10px" }} >
              <strong>2015 - 2019</strong>
            </p>
            <p style={{ fontSize: "10px" }}>
              <strong>
                Informatics, Universitas Pembangunan Nasional "Veteran"
                Yogyakarta
              </strong>
            </p>
            <p style={{ fontSize: "10px" }} className="font-semibold">
              Bachelor of Computer Science, Artificial Intelligence
            </p>
            <p className="mt-1" style={{ fontSize: "8px" }}>
              I graduated in July 2019 with a GPA of 3.63. One of the award
              recipients for the best graduate of the university at the time. In
              my thesis, I looked into how Natural Language Processing (NLP) was
              used in Telegram Bot. For the NLP approach method, I used Neural
              Network (Deep Learning) and Text Mining.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-sm font-bold">Experience</h2>
            <hr className="h-1 w-12 bg-cyan-950 rounded-3xl" />
            <div className="mt-2">
              <p style={{ fontSize: "10px" }} >
                <strong>Upwork</strong>
              </p>
              <p style={{ fontSize: "10px" }} >
                <strong>Frontend Developer | Nov 2019 - present</strong>
              </p>
              <p style={{ fontSize: "8px" }} >
                Upwork is an American freelancing platform where enterprises and
                individuals connect in order to conduct business. I am currently
                accepting remote or freelance Web Development and UI Design work
                from this platform.
              </p>
            </div>
            <div className="mt-2">
              <p style={{ fontSize: "10px" }} >
                <strong>Curindar Pty. Ltd.</strong>
              </p>
              <p style={{ fontSize: "10px" }} >
                <strong>UI Engineer | Oct 2020 - Aug 2021</strong>
              </p>
              <p style={{ fontSize: "8px" }} >
                I am a member of the Engineer Team, along with three other
                people. I am in charge of creating an interface design that is
                both user-friendly and consistent with the company’s brand. I
                also assist the team with frontend development, particularly in
                the creation of design systems and UI components with React.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
