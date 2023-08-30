import React from 'react';
import './Contact.css'; // You can create this CSS file for styling

function Contact() {
  return (
    <div className="contact">
      <h2>צרו קשר</h2>
      <div className="contact-info">
        <p>פנו אלינו בנוגע לכל שאלה שתרצו</p>
        <p>omridan@theboxtivon.com<a href="mailto:info@example.com">אימייל </a></p>
        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        <p>רחוב: ככה וככה, קרית טבעון, ישראל</p>
      </div>
    </div>
  );
}

export default Contact;
