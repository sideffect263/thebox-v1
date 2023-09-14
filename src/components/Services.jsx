import React from 'react';
import './Services.css'; // You can create this CSS file for styling

function Services() {
  const servicesData = [
    {
      title: 'אימונים אישיים',
      description: 'הקפיצי לשלב הבא עם אימונים אישיים בהתאמה אישית.',
      id: 'sub-topic-1',
    },
    {
      title: 'קורסים קבוצתיים',
      description: 'השתתפות בקורסי ספורט מגוונים ומרתקים בקבוצה חברתית.',
      id: 'sub-topic-2',
    },
    {
      title: 'ייעוץ תזונתי',
      description: 'שיפור התזונה והבריאות עם ייעוץ תזונתי מקצועי.',
      id: 'sub-topic-3',
    },
    
    // Add more services as needed
  ];

  return (
    <div className="services">
      <div className='services-content'>
      <h2>שירותים שאנו מציעים</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service" key={index} id={service.id}>
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
