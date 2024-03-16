import React, { useState } from 'react';
import './Submit.css';

const Submit = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    country: '',
    companyName: '',
    howDidYouHear: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can send the form data to your server or perform any other action

    // Show an alert when the form is successfully submitted
    alert('Form submitted successfully!');
  };

  return (
    <div className="submit-contact-container">
      <h2 className='submithead'>Contact Us</h2>
      <form onSubmit={handleSubmit}>
      <form action="https://formspree.io/f/mlekqzpk" method="POST">
        <label>Bussiness Email *</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>First Name *</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label>Last Name *</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label>Phone Number *</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

        <label>Country *</label>
        <select name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Canada">Canada</option>
          <option value="Russia">Russia</option>
          <option value="India">India</option>
          <option value="Switzerland">Switzerland</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Iran">Iran</option>
        </select>

        <label>Company Name *</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />

        <label>How did you hear about us? *</label>
        <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Search Engine">Search Engine</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend or Colleague">Friend or Colleague</option>
          <option value="Advertisement">Advertisement</option>
          <option value="Other">Other</option>
        </select>
       
        <button type="submit">Submit</button>
      </form>
      </form>
    </div>
  );
};

export default Submit;