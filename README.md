# Resume Builder Application

This project is a comprehensive resume builder application, developed using the MERN stack. The application allows users to input their personal, educational, and professional information, select from various templates, and generate a CV in PDF format.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [PDF Presentation](#pdf-presentation)

## Features
- User Authentication: Register and log in to manage your resumes.
- Personal Information: Input personal details including name, email, phone number, etc.
- Professional Information: Add educational qualifications, work experience, skills, projects, and certifications.
- Template Selection: Choose from multiple resume templates.
- PDF Generation: Generate and download your resume in PDF format.

## Technologies
This project is built using the following technologies:
- **MongoDB**: For the database to store user data and resume content.
- **Express.js**: For the backend server and API handling.
- **React.js**: For the frontend user interface.
- **Node.js**: For the backend runtime environment.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/resume-builder.git
   cd resume-builder
2. Install backend dependencies:
   ```sh
   cd backend
   npm install
3. Install frontend dependencies:
   ```sh
   cd frontend
   npm install
4. Create a .env file in the backend directory and add the following environment variables:
   ```sh
   SERVER_PORT=8005
    DATABASE_URL=mongodb://127.0.0.1:27017/
    DATABASE_NAME=Resume_Builder
    JWT_SECRET_KEY=passwordkey
    NODE_ENVIRONMENT=development
5. Start the backend server:
   ```sh
   cd backend
    npm run dev
6. Start the frontend server:
   ```sh
   cd frontend
    npm run dev

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin main`).
6. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

