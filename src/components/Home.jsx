import React from 'react';
import './Home.css'; // You can create this CSS file for styling
import img1 from '../assets/infa/thebox-noimage.jpeg';
import img2 from '../assets/infa/fpc-noimage.jpeg';
import img3 from '../assets/infa/fpc-image.jpeg'
import { useNavigate } from "react-router-dom";


function Home() {

  const navigate = useNavigate();

const discoverMoreClicked = () => {
  console.log('discoverMoreClicked');
  navigate('/about');
  console.log('redirected');
}

  return (
    <div className="home">
      <div className="home-content">
        <h2>התחברו לאושר הגופני</h2>
        <p>גלו דרך חדשה לחיים בריאים ואקטיביים בסטודיו הכושר שלנו</p>
        <div className="top-elements">
        <div id='veS' className="visual-elements-left">
        <img src={img1} alt="פתיחת הדלת לאושר הגופני" />
        <h1>קבוצת נשים</h1>
        </div>
        <div id='veS' className="visual-elements-right">
        <img src={img3} alt="פתיחת הדלת לאושר הגופני" />
        <h1>קבוצת גברים</h1>

        </div>
        </div>
        <div id='veS' className="visual-elements">
        <img src={img2} alt="פתיחת הדלת לאושר הגופני" />
        <h1>אימונים אישיים</h1>
        </div>

      </div>
      
      <div className="home-content">
        <h2>התחברו לאושר הגופני</h2>
        <p>גלו דרך חדשה לחיים בריאים ואקטיביים בסטודיו הכושר שלנו</p>
        <div className="top-elements">
        <div id='veS' className="visual-elements-left">
        <img src={img1} alt="פתיחת הדלת לאושר הגופני" />
        </div>
        <div id='veS' className="visual-elements-right">
        <img src={img3} alt="פתיחת הדלת לאושר הגופני" />
        </div>
        </div>
        <div id='veS' className="visual-elements">
        <img src={img2} alt="פתיחת הדלת לאושר הגופני" />
        </div>

        <button onClick={discoverMoreClicked}  className="cta-button">גלו עוד</button>
      </div>

    </div>
  );
}

export default Home;
