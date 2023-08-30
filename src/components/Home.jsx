import React from 'react';
import './Home.css'; // You can create this CSS file for styling
import img1 from '../assets/infa/thebox-noimage.jpeg';
import img2 from '../assets/infa/fpc-noimage.jpeg';
import img3 from '../assets/infa/fpc-image.jpeg'
import { useNavigate } from "react-router-dom";

const randNum =   Math.random();
let tImg=img1;
if(randNum > 0.7) tImg = img1;
 else if(randNum > 0.4) tImg = img2; 
else tImg = img3;
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
        <div className="visual-elements">
        <img src={tImg} alt="פתיחת הדלת לאושר הגופני" />
        </div>

        <button onClick={discoverMoreClicked}  className="cta-button">גלו עוד</button>
      </div>
    </div>
  );
}

export default Home;
