import React from 'react';
import './about.css'; 
import myImage from '../images/AiMe.jpeg'; 

function About() {
  return (
    <div class="container">
        <div class="row align-items-start mt-5">
            <div><img src={myImage} alt="My Image" /></div>
            <div class="row pe-0 bg-dark abc mt-5">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12 text my-5 ">
                            I'm a Computer Science student at Vanier College, fueled by a passion for coding and game development. 
                            My hands-on experience includes building websites and creating games within the Unity engine.  
                            I find the limitless potential of technology incredibly exciting, and I'm eager to explore 
                            how I can use my skills to design innovative solutions and immersive gaming experiences.
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="col-md-12 my-5 text2">
                        <ul className="link-list">
                            <li><a href=''>Instagram</a></li>
                            <li><a href=''>Youtube</a></li>
                            <li><a href=''>Tiktok</a></li>
                            <li><a href=''>Twitter</a></li>
                            <li><a href=''>Twitch</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;