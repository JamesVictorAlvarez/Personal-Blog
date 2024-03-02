import React from 'react';
import './home.css'; 

function Home() {
  return (
    <div> {/* No extra container needed if using parallax library */}
      <section className="stars-section">
        <div className="description">
          <h1>Welcome to My Space-Themed Blog</h1>
          <p>A little about my adventures in tech, coding, and the vast unknown...</p>
        </div>
      </section>
    </div>
  );
}

export default Home;