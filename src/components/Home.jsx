import React from 'react';
import './Home.css'; // You can create this CSS file for styling



function Home() {

  
  const gifLinks = ['https://i.giphy.com/media/hlh2xvhZOfzji/giphy.webp','https://i.giphy.com/media/8pP11leNZxyV2/giphy.webp','https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2ZrMWxxYnV1aXhtcGh1NWxjc2YwbnZ5am1hYTJrbHdvOXU1enVxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xr2K6XCosyLoLm/giphy.gif','https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3Nzd2l6bHN3ZHR4eTV0NWI5OTFlbnM4c3lmMjNyaXRwaHF6dWNxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9DPCkWsCJZMi1jVe/giphy.gif','https://i.giphy.com/media/1TSUKOv4k56aIryKAP/giphy.webp','https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2I4M3g2dHZtY3l2dG5vNnkxMzUyOXV4YTJ2cmcyY3IwcTN5MzlzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nAZw57SrApH24ogEK4/giphy.gif','https://i.giphy.com/media/1441zlMyzrOs9y/giphy.webp','https://i.giphy.com/media/1oImYxg0TMmKwQW12N/giphy.webp','https://i.giphy.com/media/NSodIu91KDWCs/giphy.webp','https://i.giphy.com/media/bcqfZjsFQJHLmXMYJw/giphy.webp']
  //generate random number
  const randomNum = Math.floor(Math.random() * gifLinks.length);
  //get random gif
  const randomGif = gifLinks[randomNum];
  //set random gif as background
  


  return (
    <div className="main">

        
    <div className="home">
     
      <div className="home-gif">
      <img src={randomGif} alt="introGif" className="introGif" />
       </div>

       <div className="home-text">
          {/* Content for the text section */}
          <div className="stacked-sections">
        <div className="section">
          {/* Content for the first section */}
          <div className="section-text">
          <h3>אימוני גברים</h3>
          </div>
        </div>
        <div className="section">
          {/* Content for the second section */}
          <div className="section-text">
          <h3>אימוני נשים</h3>
          </div>
        </div>
        <div className="section">
          {/* Content for the third section */}
          <div className="section-text">
          <h3>אימונים אישיים</h3>
          </div>
        </div>
        <div className="section">
          {/* Content for the fourth section */}
          <div className="section-text">
          <h3>טיפולים תקופתיים</h3>
          </div>
        </div>
      </div>

        </div>
      </div>

      <div className='middle'>  
        <div className='middle-text'>
          <h3>הכל במקום אחד</h3>
        </div>
      </div>

        
    <div className="home">
     
      <div className="home-gif">
      <img src={randomGif} alt="introGif" className="introGif" />
       </div>

       <div className="home-text">
          {/* Content for the text section */}
          <div className="stacked-sections">
        <div className="section">
          {/* Content for the first section */}
          <div className="section-text">
          <h3>אימוני גברים</h3>
          </div>
        </div>
        <div className="section">
          {/* Content for the second section */}
          <div className="section-text">
          <h3>אימוני נשים</h3>
          </div>
        </div>
        <div className="section">
          {/* Content for the third section */}
          <div className="section-text">
          <h3>אימונים אישיים</h3>
          </div>
        </div>
        <div className="section">
          {/* Content for the fourth section */}
          <div className="section-text">
          <h3>טיפולים תקופתיים</h3>
          </div>
        </div>
      </div>

        </div>
      </div>

          </div>
   
  );
}

export default Home;
