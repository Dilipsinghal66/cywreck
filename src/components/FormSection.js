import React from 'react';
import './JoinSection.css';
import './FormSection.css';


const FormSection = () => {
    return (
        <div className="form-container">
        <form className="custom-form">
          <label htmlFor="fullName" style={{ color: '#fff' }}>Your Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            style={{
              width: '480px',
              height: '56px',
              backgroundColor: '#4D3366',
              color: '#AD94C7',
            }}
          />    
           <label htmlFor="email" style={{ color: '#fff' }}>Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          style={{
            width: '480px',
            height: '56px',
            backgroundColor: '#4D3366',
            color: '#AD94C7',
          }}
        />
        <label htmlFor="country" style={{ color: '#fff' }}>Add Your Country</label>   
        <select
          id="country"
          name="country"
          style={{
            width: '480px',
            height: '56px',
            placeholder : 'Select your country',
            backgroundColor: '#4D3366',
            color: '#AD94C7',
            borderRadius: '5px',
            padding: '10px',
          }}
        >
          <option value="">Select your country</option>
          <option value="USA">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="Canada">Canada</option>
          {/* Add more countries as needed */}
        </select>
        </form>
      </div>
    );
  }
  
  export default FormSection;


