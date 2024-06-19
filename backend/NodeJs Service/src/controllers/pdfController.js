import { launch } from 'puppeteer';
import Resume from '../models/Resume.js';

export async function generatePDF(req, res) {
    const { personalInfo, summary, experiences, educations, languages, skills, projects, certificates, selectedTemplate } = req.body;



    try {
        console.log('Received request to generate PDF');

        const newResume = new Resume({
            user: req.user.id, // Assuming you have the user ID from authenticated user
            content: {
                personalInfo,
                summary,
                experiences,
                educations,
                languages,
                skills,
                projects,
                certificates,
                selectedTemplate
            }
        });

        // Save the resume to the database
        const savedResume = await newResume.save();
        console.log('Resume saved to database:', savedResume);

        let browser;
        try {
            browser = await launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
                timeout: 60000 // Increase timeout to 60 seconds
            });
            const page = await browser.newPage();

            await page.setContent(`
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume Template</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">

  <div class="resume" style="display: flex; width: 100%; max-width: 800px; margin: 20px auto; background-color: #fff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px; overflow: hidden;">
    <div class="left-column" style="width: 30%; background-color: #1a202c; color: #fff; padding: 20px;">
      <div class="profile" style="padding: 10px;">
        
        <div class="profile-info" style="text-align: center;">
          <h2 style="font-size: 18px; margin: 0;">${personalInfo.firstName} ${personalInfo.lastName}</h2>
        </div>
        <div class="contact-info" style="text-align: center;">
          <p style="font-size: 10px; background-color: #E5E5E5; border-radius: 10px; padding: 5px; text-align: center; margin-top: 5px;"><strong>${personalInfo.phone}</strong></p>
          <p style="font-size: 10px; background-color: #E5E5E5; border-radius: 10px; padding: 5px; text-align: center; margin-top: 5px;"><strong>${personalInfo.email}</strong></p>
        </div>
        <div class="certificates" style="margin-top: 10px;">
          <h3 style="font-size: 12px; font-weight: bold; margin-bottom: 5px;">Certificates</h3>
          <div class="certificate-item" style="display: flex; justify-content: space-between; font-size: 10px;">
            ${certificates.map(cert => `<p>${cert.name} (${cert.organization})</p>`).join('')}
          </div>
        </div>
        <div class="languages" style="margin-top: 10px;">
          <h3 style="font-size: 12px; font-weight: bold; margin-bottom: 5px;">Languages</h3>
          <div class="language-item" style="display: flex; justify-content: space-between; font-size: 10px;">
            ${languages.map(lang => `<p>${lang.language} (${lang.proficiency})</p>`).join('')}
          </div>
        </div>
        <div class="skills" style="margin-top: 10px;">
          <h3 style="font-size: 12px; font-weight: bold; margin-bottom: 5px;">Skills</h3>
          <div class="skill-item" style="display:
          <div class="skill-item" style="display: flex; justify-content: space-between; font-size: 10px;">
            ${skills.map(skill => `<p>${skill.skill} (${skill.level})</p>`).join('')}
          </div>
        </div>
        <div class="projects" style="margin-top: 10px;">
          <h3 style="font-size: 12px; font-weight: bold; margin-bottom: 5px;">Projects</h3>
          <div class="project-item" style="display: flex; justify-content: space-between; font-size: 10px;">
            ${projects.map(proj => `<p>${proj.name} (${proj.description})</p>`).join('')}
          </div>
        </div>
        <div class="links" style="margin-top: 10px;">
          <h3 style="font-size: 12px; font-weight: bold; margin-bottom: 5px;">Links</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li><a href="#" style="font-size: 10px; color: #3182ce; text-decoration: none; display: flex; align-items: center;"><i class="fab fa-linkedin" style="margin-right: 5px;"></i> LinkedIn</a></li>
            <li><a href="#" style="font-size: 10px; color: #3182ce; text-decoration: none; display: flex; align-items: center;"><i class="fab fa-github" style="margin-right: 5px;"></i> GitHub</a></li>
            <li><a href="#" style="font-size: 10px; color: #3182ce; text-decoration: none; display: flex; align-items: center;"><i class="fab fa-instagram" style="margin-right: 5px;"></i> Instagram</a></li>
            <li><a href="#" style="font-size: 10px; color: #3182ce; text-decoration: none; display: flex; align-items: center;"><i class="fas fa-link" style="margin-right: 5px;"></i> Website</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right-column" style="width: 70%; padding: 20px;">
      <div class="about">
        <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">About</h2>
        <div class="separator" style="height: 1px; width: 30px; background-color: #3182ce; margin-bottom: 10px;"></div>
        <p style="font-size: 12px; line-height: 1.5; margin-bottom: 10px;">${summary}</p>
      </div>
      <div class="education">
        <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">Education</h2>
        <div class="separator" style="height: 1px; width: 30px; background-color: #3182ce; margin-bottom: 10px;"></div>
        ${educations.map(edu => `<p style="font-size: 12px; line-height: 1.5; margin-bottom: 10px;">${edu.degree} in ${edu.fieldOfStudy} at ${edu.school}</p>`).join('')}
      </div>
      <div class="experience">
        <h2 style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">Experience</h2>
        <div class="separator" style="height: 1px; width: 30px; background-color: #3182ce; margin-bottom: 10px;"></div>
        ${experiences.map(exp => `<p style="font-size: 12px; line-height: 1.5; margin-bottom: 10px;">${exp.title} at ${exp.company}</p>`).join('')}
      </div>
    </div>
  </div>

</body>
</html>
      `);

            console.log('Page content set successfully');

            // Create a PDF with background colors included
            const pdf = await page.pdf({ format: 'A4', printBackground: true });
            console.log('PDF generated successfully');

            await browser.close();
            console.log('Browser closed successfully');

            // Set the response headers and send the PDF
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
            res.send(pdf);
        } catch (error) {
            console.error('Error generating PDF:', error);
            if (browser) {
                await browser.close();
            }
            res.status(500).send('Error generating PDF');
        }
    } catch (error) {
        console.error('Error saving resume to database:', error);
        res.status(500).send('Error saving resume to database');
    }
}