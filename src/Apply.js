import React from 'react';
import { useState } from 'react';
import './Apply.css'; 
import SuccessModal from './SuccessModal';
function Apply() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const closeModal = () => {
    setFormSubmitted(false);
  };
  return (
    <div class="you">
    <div className="containeryou">
      <h2>Internship Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="full-name">Full Name:</label>
        <input type="text" id="full-name" name="full-name" required />
      
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />
      
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />
        
        <label htmlFor="internship">Choose an Internship:</label>
        <select id="internship" name="internship">
          <option value="web-development">Web Development</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="data-analysis">Data Analysis</option>
          <option value="Finance Intern">Finance Intern</option>
  <option value="Graphic Design Intern">Graphic Design Intern</option>
  <option value="Human Resources Intern">Human Resources Intern</option>
  <option value="Business Development Intern">Business Development Intern</option>
  <option value="Social Media Intern">Social Media Intern</option>
  <option value="Sales Intern">Sales Intern</option>
  <option value="Content Writing Intern">Content Writing Intern</option>
  <option value="UX/UI Design Intern">UX/UI Design Intern</option>
  <option value="Customer Service Intern">Customer Service Intern</option>
  <option value="Project Management Intern">Project Management Intern</option>
  <option value="Event Planning Intern">Event Planning Intern</option>
  <option value="Public Relations Intern">Public Relations Intern</option>
        </select>
        <div class="for1">
        <label htmlFor="motivation">Why are you interested in this internship?</label>
        <textarea id="motivation" name="motivation" rows="4" required></textarea>
      
        <label htmlFor="skills">Skills and Experiences:</label>
        <textarea id="skills" name="skills" rows="4"></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
      {formSubmitted && <SuccessModal closeModal={closeModal} />} {/* Show modal on successful form submission */}
        {formSubmitted && (
          <div className="modal-backdrop" onClick={closeModal}></div>
        )}
    </div>
    </div>
  );
}

export default Apply;
