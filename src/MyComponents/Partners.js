import React, { useState,useEffect} from 'react';
import '../Assets/styles/header.css';
import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

import img6 from '../Assets/images/partners.jpg';
import cr1 from '../Assets/images/partners.jpg';
import cr2 from '../Assets/images/Partners_1.jpg';

import aws from '../Assets/images/aws-partners.jpg';
import azure from '../Assets/images/azure.png';

import googlecloud from '../Assets/images/googlecloud.jpg';

import { Link } from 'react-router-dom';
const Partners = () => {
  
  const [visible] = useState(true);
  

  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = '/';
};



const handleLinkClick = () => {
  // Reload the page before navigating
  window.location.reload();
};



useEffect(() => {
  const nextDom = document.getElementById('next');
  const prevDom = document.getElementById('prev');
  const carouselDom = document.querySelector('.carousel');
  const sliderDom = carouselDom.querySelector('.carousel .list');
  const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');

  thumbnailBorderDom.appendChild(thumbnailBorderDom.querySelector('.item'));

  let timeAutoNext = 7000;
  let runNextAuto = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);

  nextDom.onclick = function() {
    showSlider('next');
  };

  prevDom.onclick = function() {
    showSlider('prev');
  };

  let runTimeOut;
  function showSlider(type) {
    let sliderItems = sliderDom.querySelectorAll('.item');
    let thumbnailItems = thumbnailBorderDom.querySelectorAll('.item');

    if (type === 'next') {
      sliderDom.appendChild(sliderItems[0]);
      thumbnailBorderDom.appendChild(thumbnailItems[0]);
      carouselDom.classList.add('next');
    } else {
      sliderDom.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailBorderDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselDom.classList.remove('next');
      carouselDom.classList.remove('prev');
    }, 300);
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
  }
}, []);  // Empty dependency array to run this effect only once



  return (
    <div>
         <nav className='nav1 navbar-scrolled' style={{ visibility: visible ? 'visible' : 'hidden', backgroundColor:'#312f36',position: 'fixed', width: '100%', zIndex: '1000' }}>
      <div className="wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" onClick={handleLogoClick}>
          <img src={logo} alt="NyKinSky Logo" className="logo-image" style={{ width: '80px', height: 'auto', paddingTop: '10px', cursor: 'pointer' }} />
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><FontAwesomeIcon icon={faTimes} /></label>


  
        
        <li style={{ marginRight: '20px'}}>
        <Link to="/Services-AI">Services</Link>
          <input type="checkbox" id="showMega" />
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src={img6} alt="" />
              </div>
              <div className="row">
                
                <ul className="mega-links">
                  <li><Link to="/Services-AI">Aritifical Intelligence(AI)</Link></li>
                  <li><Link to="/Cloud-Transformation">Cloud Transformation</Link></li>
                  <li><Link to="/Data-Engineering">Data Engineering</Link></li>
                  <li><Link to="/Generative-AI">Generative AI</Link></li>
                </ul>
              </div>
              <div className="row">
                
                <ul className="mega-links">
                  <li><Link to="/Experience-Consulting">Experience Consulting</Link></li>
                  <li><Link to="/Application-Engineering">Application Engineering</Link></li>
                  <li><Link to="/Business-Intelligence">Business Intelligence</Link></li>
                  <li><Link to="/MLOps">MLOps</Link></li>
                </ul>
              </div>
              <div className="row">
               
                <ul className="mega-links">
                  <li><Link to="/Data-Science">Data Science</Link></li>
                  <li><Link to="/AI-Engineering">AI Engineering</Link></li>
                  <li><Link to="/ML-Products & Platforms">ML Products & Platforms</Link></li>
  
                </ul>
              </div>
            </div>
          </div>
        </li>

        
        <li style={{ marginRight: '20px' }}>
        <Link to="/indsutries">Industries</Link>
          <input type="checkbox" id="showMega" />
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src={img6} alt="" />
              </div>
              <div className="row">  
                <ul className="mega-links">
                  <li><Link to="/indsutries">Retail</Link></li>
                  <li><Link to="/industries-cpg">CPG</Link></li>
                  <li><Link to="/industries-bfs">BFS</Link></li>
                  <li><Link to="/industries-insurance">Insurance</Link></li>
                  <li><Link to="/industries-Manufacturing">Manufacturing</Link></li>
                </ul>
              </div>
              <div className="row">  
                <ul className="mega-links">
                 
                  <li><Link to="/industries-Transportation-Logistics">Transportation & logistics</Link></li>
                  <li><Link to="/industries-Life-Science">Life Sciences</Link></li>
                  <li><Link to="/industries-Healthcare">HealthCare</Link></li>
                  <li><Link to="/industries-tech-telecom-media">Technology, Telecom & Media  </Link></li>
                </ul>
              </div>
              <div className="row">
                <ul className="mega-links">
                  <li><Link to="#"></Link></li>
                  <li><Link to="#"></Link></li>
                  <li><Link to="#"></Link></li>
                  <li><Link to="#"></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>




        <li style={{ marginRight: '20px' }}>
        <Link to="/approach">Our Approach</Link>
        </li>

        

        <li style={{ marginRight: '20px' }}>
        <Link to="/our-partners">Our Partners</Link>
      </li>


        <li style={{ marginRight: '20px' }}>
        <Link to="/insights">Insights</Link>
          <input type="checkbox" id="showMega" />
          <div className="mega-box">
            <div className="content">
              <div className="row">
              <ul className="mega-links">
                  <li><Link to="#">Visionary Viewpoints</Link></li>
                
                </ul>
              </div>
              <div className="row">
                
                <ul className="mega-links">
                  <li><Link to="#">Case Studies</Link></li>
                
                </ul>
              </div>
              <div className="row">
                
                <ul className="mega-links">
                  <li><Link to="#">Insights</Link></li>
                </ul>
              </div>
              <div className="row">
              
                <ul className="mega-links">
                  <li><Link to="#">WhitePapers</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        
        <li style={{ marginRight: '20px' }}><Link to="#">Careers</Link></li>   
      </ul>
      <label htmlFor="menu-btn" className="btn menu-btn"><FontAwesomeIcon icon={faBars} /></label>
<li style={{ marginRight: '20px' }}>
    <Link
        to="/join-global-office"
        style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '1px 20px',
            borderRadius: '8px',
            backgroundColor: '#ff6600',
            transition: 'background-color 0.3s ease-in-out',
            display: 'inline-block',
            marginBottom: '20px',
        }}
    >
        &#x1F680; Join Global Office
    </Link>
</li>
    </div>

  
  </nav>
  <div style={{ height: '90px' }}></div>



  <div className="carousel">
      <div className="list">
        <div className="item">
          <img src={cr1} alt="1" />
          <div className="content">
          
           {/*<div className="topic">ANIMAL</div>*/}
            <div className="des">
              {/* Lorem ipsum text */}
            </div>
            
          </div>
        </div>
        <div className="item">
          <img src={cr2} alt="2" />
          <div className="content">
            
             {/*<div className="topic">ANIMAL</div>*/}
            <div className="des">
              {/* Lorem ipsum text */}
            </div>
           
          </div>
        </div>
        <div className="item">
          <img src={cr1} alt="3" />
          <div className="content">
           
             {/*<div className="topic">ANIMAL</div>*/}
            <div className="des">
              {/* Lorem ipsum text */}
            </div>
           
          </div>
        </div>
        <div className="item">
          <img src={cr2} alt="4" />
          <div className="content">
          
             {/*<div className="topic">ANIMAL</div>*/}
            <div className="des">
              {/* Lorem ipsum text */}
            </div>
           
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <div className="item active">
          <img src={cr1} alt="Thumbnail 1" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={cr2} alt="Thumbnail 2" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={cr2} alt="Thumbnail 3" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src={cr2} alt="Thumbnail 4" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
      <div className="time"></div>
    </div>







 


<div id="main-section2" className="landing-page-main mid-section sky-red-background">
        <div className="left-aligned" style={{ paddingLeft: '20px', paddingTop: '50px' }}>
          <h6 style={{ marginBottom: '10px', textAlign: 'center'}}><b> NyKinSky Partners</b></h6>
          <h2 style={{ margin: '0' ,paddingBottom:'30px'}}><b>Strategic alliance partners</b></h2>
    
        </div>
        <div className="landing-page-cards-container">
          <div className="place-card-container">
            <div className="image-container">
              <img
                alt="London"
                src={aws}
                className="place-card-image"
              />

            </div>
            <div className="place-card-container1">
              <span className="place-card-text"><span>AWS</span></span>
              <span className="place-card-text1">
                <span>
                  NyKinSky's digital transformation strategy blends human expertise with technical capabilities to kick business transformation for various companies into gear—and keep the momentum going.
                </span>
              </span>
            </div>
          </div>
          <div className="place-card-container">
            <div className="image-container">
              <img
                alt="Rome"
                src={azure}
                className="place-card-image"
              />

            </div>
            <div className="place-card-container1">
              <span className="place-card-text"><span>Azure</span></span>
              <span className="place-card-text1">
                <span>
                  If you're looking to elevate your customer experiences or build new products, we’re ready to help you deliver on your vision at speed, cost, and scale. Led by a team of technologists and engineers, we’ll productize your ideas.
                </span>
              </span>
            </div>
          </div>
          <div className="place-card-container">
            <div className="image-container">
              <img
                alt="Cluj-Napoca"
                src={googlecloud}
                className="place-card-image"
              />

            </div>
            <div className="place-card-container1">
              <span className="place-card-text"><span>Google Cloud</span></span>
              <span className="place-card-text1">
                <span>
                  We deliver swift, sustainable solutions, so you can empower your people, improve your processes and transform your technology in a safe, secure environment.
                </span>
              </span>
            </div>
          </div>
          
        </div>
      </div>

 
              {/* Footer Section */}
              <footer class="footer" >
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><Link to="/Services-AI">our services</Link></li>
            <li><Link to="#">privacy policy</Link></li>
          
          </ul>
        </div>
        <div class="footer-col"  onClick={handleLinkClick}  >
          <h4>about us</h4>
          <ul>
            <li><Link to="/about-us" >Who we are</Link></li>
            <li><Link to="/about-us">Our Journey & Story </Link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Careers</h4>
          <ul>
            <li><Link to="#">Explore opportunities</Link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
      
              <Link to="https://www.instagram.com/nykinsky/" target='blank'><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link to="https://www.linkedin.com/company/nykinsky/mycompany/" target='blank'><FontAwesomeIcon icon={faLinkedinIn} /></Link>
            </div>
        </div>
      </div>
    </div>
    <hr style={{ borderColor: "white" }} /> {/* Horizontal line with white color */}
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <p style={{ color: "white" }}>&copy; <span style={{ whiteSpace: 'nowrap' }}>{new Date().getFullYear()} NyKinSky & Company. All rights reserved.</span></p>
          </div>
        </div>
      </div>
 </footer>
  

    </div>
  )
}

export default Partners
