import React from 'react'; 
import Tilt from 'react-parallax-tilt'; 
import './home.css'; 
import './blackHole.css'; 

function Home() {
  return (
    <Tilt className="parallax-effect" tiltMaxAngleX={5} tiltMaxAngleY={5}> 
    <div class="hold">
      <div id="blackhole">
      <div class="ring">
        <div class="ring">
          <div class="ring">
            <div class="ring">
              <div class="ring">
                <div class="ring">
                  <div class="ring">
                    <div class="ring">
                      <div class="ring">
                        <div class="ring">
                          <div class="ring">
                            <div class="ring">
                              <div class="ring">
                                <div class="ring">
                                  <div class="ring1">
                                    <div class="ring1">
                                      <div class="ring1">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </Tilt> 
    
  );
}

export default Home;