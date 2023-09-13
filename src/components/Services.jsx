import React from 'react';
import './Services.css'; // You can create this CSS file for styling

function Services() {
  const servicesData = [
    {
      title: 'אימונים אישיים',
      description: 'הקפיצי לשלב הבא עם אימונים אישיים בהתאמה אישית.',
    },
    {
      title: 'קורסים קבוצתיים',
      description: 'השתתפות בקורסי ספורט מגוונים ומרתקים בקבוצה חברתית.',
    },
    {
      title: 'ייעוץ תזונתי',
      description: 'שיפור התזונה והבריאות עם ייעוץ תזונתי מקצועי.',
    },
    // Add more services as needed
  ];

  return (
    <div className="services">
      <div className='services-content'>
      <h2>שירותים שאנו מציעים</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Services;
