import React from 'react';
import './App.css';
function Contact() {
  return (
    <div className="contact">
      <img src='/image/hinhcontact.jpg' />
      <h1>Contact</h1>
      <p>Have a question? Give us a call, chat with us or 
        fill out the form below and someone 
        from our team will get back to you as soon as possible.
      </p>
      <table border={0} align='center'>
        <tr>
          <td>
            <select>
              <option>Others</option>
              <option>Topic</option>
              <option>General Inquiry</option>
              <option>Sales Inquiry</option>
              <option>Feedback</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
          <input type='text' placeholder='First name'></input>
          </td>
        </tr>
        <tr>
          <td>
          <input type='text' placeholder='Last name'></input>
          </td>
        </tr>
        <tr>
          <td>
            <input type='text' placeholder='Email address'></input>
          </td>
        </tr>
        <tr>
          <td>
            <input type='number' placeholder='Phone number'></input>
          </td>
        </tr>
        <tr>
          <td>
            <input type='number' placeholder='Zip code '></input>
          </td>
        </tr>
        <tr>
          <td>
           <textarea placeholder='Question / Comment' />
          </td>
        </tr>
        <tr>
          <td>
          By clicking “Submit”, you confirm that you have 
          completely filled in the information and read and 
          understood VinFast's Privacy Policy.
          </td>
        </tr>
      </table>
      
      <button type='submit'>Submit</button>
    </div>
  );
}

export default Contact;
