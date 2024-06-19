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
            switch (selectedTemplate) {
                case 'template1':
                    // Code for handling template1
                    console.log("Handling template1");
                    // Add your logic here

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
                         
                    break;
            
                case 'template2':
                    // Code for handling template2
                    console.log("Handling template2");
                    // Add your logic here
                    await page.setContent(`
                        <!DOCTYPE html>
                  <html lang="en">
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Resume Template</title>
                  </head>
                  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
                  
                   <div bis_skin_checked="1"
                          style="margin-right:15px;margin-bottom:70px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                          <div bis_skin_checked="1"
                              style="height:869px;margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                              <div bis_skin_checked="1"
                                  style="position:relative;height:869px;margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                  <div bis_skin_checked="1"
                                      style="max-height:815px;overflow: hidden auto;box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 7.41692px 0px;min-height:815px;height:815px;margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                      <div bis_skin_checked="1"
                                          style="margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                          <div bis_skin_checked="1"
                                              style="margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                              <div bis_skin_checked="1"
                                                  style="margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                  <div bis_skin_checked="1"
                                                      style="margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                  </div>
                                                  <div style="transform: scale(0.9875);font-family:Arial, sans-serif;font-weight:400;font-style:normal;font-size:8px;line-height:10px;width: 641px;transform-origin:320.5px 0px;margin: 0px auto;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;"
                                                      bis_skin_checked="1">
                                                      <div bis_skin_checked="1"
                                                          style="background-color:rgb(245, 245, 245);margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                          <div bis_skin_checked="1"
                                                              style="display:flex;margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                              <div bis_skin_checked="1"
                                                                  style="width: 420px;margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                              </div>
                                                              <div bis_skin_checked="1"
                                                                  style="width: 220px;background-color:rgb(234, 231, 255);padding-top:25px;margin:0px;padding:25px 0px 0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                              </div>
                                                          </div>
                                                          <div bis_skin_checked="1"
                                                              style="margin-left:23px;padding:0px 41px 11px 11px;background-color:rgb(91, 80, 155);display:flex;justify-content:space-between;border-radius:100px 0px 0px 100px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                              <div bis_skin_checked="1"
                                                                  style="font-family:Arial, sans-serif;font-weight:700;min-width:170px;width: 170px;height:170px;background-color:rgb(255, 255, 255);border-radius:100px;color:rgb(91, 80, 155);text-align:center;font-size:50px;line-height:170px;overflow:hidden;display:block;vertical-align:top;margin-top:11px;margin:11px 0px 0px;padding:0px;border:0px none rgb(91, 80, 155);-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                  </div>
                                                              <div bis_skin_checked="1"
                                                                  style="display:flex;justify-content:space-between;width: 100%;padding-top:32px;margin:0px;padding:32px 0px 0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                  <div bis_skin_checked="1"
                                                                      style="padding-right:22px;margin-left:21px;margin:0px 0px 0px 21px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      <div bis_skin_checked="1"
                                                                          style="font-family:Arial, sans-serif;font-weight:700;font-size:24px;color:rgb(255, 255, 255);line-height:24px;margin-bottom:4px;margin:0px 0px 4px;padding:0px;border:0px none rgb(255, 255, 255);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                          ${personalInfo.firstName} ${personalInfo.lastName}</div>
                                                                      <div bis_skin_checked="1"
                                                                          style="font-family:Arial, sans-serif;font-weight:700;font-size:16px;line-height:16px;margin-bottom:8px;color:rgb(255, 255, 255);margin:0px 0px 8px;padding:0px;border:0px none rgb(255, 255, 255);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                          </div>
                                                                  </div>
                                                                  <div bis_skin_checked="1"
                                                                      style="min-width:150px;width: 150px;margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      <div bis_skin_checked="1"
                                                                          style="color:rgb(255, 255, 255);font-size:11px;line-height:11px;margin-bottom:6px;margin:0px 0px 6px;padding:0px;border:0px none rgb(255, 255, 255);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                          ${personalInfo.phone} <div bis_skin_checked="1"
                                                                              style="margin-top:6px;color:rgb(255, 255, 255);font-size:11px;line-height:11px;padding:0px;border:0px none rgb(255, 255, 255);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                              </div>
                                                                      </div>
                                                                      <div bis_skin_checked="1"
                                                                          style="overflow-wrap:break-word;color:rgb(255, 255, 255);font-size:11px;line-height:11px;margin-bottom:6px;margin:0px 0px 6px;padding:0px;border:0px none rgb(255, 255, 255);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                          ${personalInfo.email}</div><span
                                                                          style="display:block;overflow-wrap:break-word;color:rgb(255, 255, 255);font-size:11px;line-height:11px;margin-bottom:6px;margin:0px 0px 6px;padding:0px;border:0px none rgb(255, 255, 255);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;"></span>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div bis_skin_checked="1"
                                                          style="display:flex;flex-flow:row wrap;min-height:1200px;margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                          <div bis_skin_checked="1"
                                                              style="width: 420px;padding:52px 37px 15px 0px;background-color:rgb(245, 245, 245);margin:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                              <div bis_skin_checked="1"
                                                                  style="padding:0px 0px 50px;margin:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                  <h2
                                                                      style="font-family:Arial, sans-serif;font-weight:700;font-size:16px;line-height:16px;color:rgb(234, 231, 255);background-color:rgb(91, 80, 155);padding:5px 23px 7px 72px;border-radius:0px 100px 100px 0px;display:inline-block;margin:0px;border:0px none rgb(234, 231, 255);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      Professional Experience</h2>
                                                                  <div bis_skin_checked="1"
                                                                      style="padding-top:22px;margin-left:72px;position:relative;padding-bottom:33px;margin:0px 0px 0px 72px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      <h3
                                                                          style="position:relative;margin-bottom:4px;margin:0px 0px 4px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                          <span
                                                                              style="font-size:10px;line-height:10px;display:block;font-weight:700;color:rgb(91, 80, 155);margin:0px;padding:0px;border:0px none rgb(91, 80, 155);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">Human
                                                                              ${experiences.map(exp => `<p style="font-size: 12px; line-height: 1.5; margin-bottom: 10px;">${exp.title} at ${exp.company}</p>`).join('')}</span></h3>
                                                                   
                                                                  </div>
                                                             
                                                              </div>
                                                              <div bis_skin_checked="1"
                                                                  style="padding:0px 0px 50px;margin:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                  <h2
                                                                      style="font-family:Arial, sans-serif;font-weight:700;font-size:16px;line-height:16px;color:rgb(234, 231, 255);margin-bottom:22px;background-color:rgb(91, 80, 155);padding:5px 23px 7px 72px;border-radius:0px 100px 100px 0px;display:inline-block;margin:0px 0px 22px;border:0px none rgb(234, 231, 255);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      Education</h2>
                                                                  <div bis_skin_checked="1"
                                                                      style="margin-bottom:0px;margin-left:72px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      <h3
                                                                          style="margin-bottom:4px;position:relative;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                          <span
                                                                              style="font-weight:700;font-size:10px;line-height:11px;margin-bottom:3px;display:flex;justify-content:space-between;width: 100%;margin:0px 0px 3px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">Masters
                                                                              <i
                                                                                  style="font-family:Arial, sans-serif;font-weight:400;font-style:normal;display:block;font-size:8px;line-height:10px;padding-left:6px;margin:0px;padding:0px 0px 0px 6px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">September
                                                                                  ${educations.map(edu => `<p style="font-size: 12px; line-height: 1.5; margin-bottom: 10px;">${edu.degree} in ${edu.fieldOfStudy} at ${edu.school}</p>`).join('')}
                                                                              </i></span></h3>
                                                                     
                                                                  </div>
                                                              </div>
                                                              <div bis_skin_checked="1"
                                                                  style="padding:0px 0px 50px;margin:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                  <h2
                                                                      style="font-family:Arial, sans-serif;font-weight:700;font-size:16px;line-height:16px;color:rgb(234, 231, 255);background-color:rgb(91, 80, 155);padding:5px 23px 7px 72px;border-radius:0px 100px 100px 0px;display:inline-block;margin:0px;border:0px none rgb(234, 231, 255);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      Certifications</h2>
                                                                  <div bis_skin_checked="1"
                                                                      style="margin-bottom:0px;padding-bottom:0px;padding-top:22px;margin-left:72px;position:relative;padding:22px 0px 0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      <h3
                                                                          style="position:relative;margin-bottom:4px;margin:0px 0px 4px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                          <span
                                                                              style="margin-bottom:3px;display:flex;justify-content:space-between;font-size:10px;line-height:10px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;"><abbr
                                                                                  style="font-style:normal;display:block;color:rgb(91, 80, 155);font-weight:700;margin:0px;padding:0px;border:0px none rgb(91, 80, 155);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">             ${certificates.map(cert => `<p>${cert.name} (${cert.organization})</p>`).join('')}
                  
                                                                                  </abbr><i
                                                                                  style="font-family:Arial, sans-serif;font-weight:400;font-style:normal;padding-left:15px;display:block;font-size:8px;line-height:8px;margin:0px;padding:0px 0px 0px 15px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                                   </i></span></h3>
                                                                  
                  
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div bis_skin_checked="1"
                                                              style="width: 220px;background-color:rgb(234, 231, 255);padding:52px 41px 15px 26px;margin:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                              <div bis_skin_checked="1"
                                                                  style="padding:0px 0px 30px;position:relative;color:rgb(0, 0, 0);font-size:11px;line-height:12px;margin:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                  <div bis_skin_checked="1"
                                                                      style="margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      <p
                                                                          style="margin-bottom:0px;font-weight:700;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      ${summary}
                                                                      </p>
                                                                  </div>
                                                              </div>
                                                              <div bis_skin_checked="1"
                                                                  style="padding:0px 0px 30px;margin:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                  <h2
                                                                      style="font-family:Arial, sans-serif;font-weight:700;font-size:16px;line-height:16px;color:rgb(0, 0, 0);margin-bottom:12px;margin:0px 0px 12px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      Key Skills</h2>
                                                                  <div bis_skin_checked="1"
                                                                      style="margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                      <div bis_skin_checked="1"
                                                                          style="width: 100%;margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                         
                                                                          <div bis_skin_checked="1"
                                                                              style="margin-bottom:15px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                              <div bis_skin_checked="1"
                                                                                  style="margin-bottom:3px;font-size:11px;line-height:12px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                                  ${skills.map(skill => `<p>${skill.skill} (${skill.level})</p>`).join('')}
                                                                              </div>
                                                                              <div bis_skin_checked="1"
                                                                                  style="height:8px;border:1px solid rgb(0, 0, 0);border-radius:10px;overflow:hidden;margin:0px;padding:0px;vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;">
                                                                                  <div style="width: 60%;background-color:rgb(0, 0, 0);height:7px;border-radius:10px;margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;"
                                                                                      bis_skin_checked="1"></div>
                                                                              </div>
                                                                          </div>
                                                                        
                                                                         
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div style="width: 2px; height: 1.65239px;height:1.64062px;margin:0px;padding:0px;border:0px none rgb(0, 0, 0);vertical-align:baseline;-webkit-font-smoothing:antialiased;box-sizing:border-box;"
                                                          bis_skin_checked="1"></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                 
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  </body>
                  </html>
                        `);
                    break;
            
                case 'template3':
                    // Code for handling template3
                    console.log("Handling template3");
                    // Add your logic here
                    break;
            
                // Add more cases as needed
                default:
                    // Code for handling unknown templates
                    console.log("Unknown template selected");
                    // Add your logic here
                    break;
            }
       

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