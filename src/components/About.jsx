import React from 'react';
import './About.css'; // You can create this CSS file for styling

function About() {
  
  
  
  
  return (
    <div className="about">
      <div className="about-content">
        <h2>על הסטודיו</h2>
        <p>אנו מזמינים אתכם להצטרף אלינו במסע כושר מרתק ומשובח.</p>
        <p>בסטודיו שלנו, אנחנו מחוייבים לתמוך בכל אדם בדרכו לגוף חזק, בריא ומאושר.</p>
        <iframe 
        src='https://app.boostapp.co.il/Rest.php?StudioUrl=60c59a38477cb'
        title='training-schedule'
        width='100%'
        height='100%'
        id='traning-scaduel'
        frameBorder='0'
        allowFullScreen
        />
      </div>
    </div>
  );
}

export default About;
