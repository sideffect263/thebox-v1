import React from 'react';
import './Home.css'; // You can create this CSS file for styling
import img1 from '../assets/infa/thebox-noimage.jpeg';
import img2 from '../assets/infa/fpc-noimage.jpeg';
import img3 from '../assets/infa/fpc-image.jpeg'


function Home() {

  


  return (
    <div className="main">

        
    <div className="home">
      <div className="home-content">
        <h2>התחברו לאושר הגופני</h2>
        <p>גלו דרך חדשה לחיים בריאים ואקטיביים בסטודיו הכושר שלנו</p>
        <div className="top-elements">
        <a id='veS' className="visual-elements-left" href='/home#womens-group'>
        <img src={img1} alt="פתיחת הדלת לאושר הגופני" />
        <h1>קבוצת נשים</h1>
        </a>
        <a id='veS' className="visual-elements-right" href='/home#mens-group'>
        <img src={img3} alt="פתיחת הדלת לאושר הגופני" />
        <h1>קבוצת גברים</h1>

        </a>
        </div>
        <a id='veS' className="visual-elements" href='/home#personal-training'>
        <img src={img2} alt="פתיחת הדלת לאושר הגופני" />
        <h1>אימונים אישיים</h1>
        </a>

      </div>
      
      <div className="home-content">
       <div className="mens-group" id='mens-group'>

       </div>
        <div className="womens-group" id='womens-group'>
          </div>
        <div className="personal-training" id="personal-training" >
          </div>

      </div>
      

    </div>



    </div>
  );
}

export default Home;
