import React, { useState} from 'react';
import '../Assets/styles/header.css';
import '../Assets/styles/approach.css';
import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

import img6 from '../Assets/images/Approach_1.jpg';

import slider2 from '../Assets/images/services_2.jpg';
import Approach_2 from '../Assets/images/Approach_2.jpg';
import Approach_3 from '../Assets/images/Approach_3.jpg';
import Approach_4 from '../Assets/images/Approach_4.jpg';

import { Link } from 'react-router-dom';

const Approach = () => {
  const [visible] = useState(true);
 
  

  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = '/';
};

const handleLinkClick = () => {
  // Reload the page before navigating
  window.location.reload();
};




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





  <div className="slider">
            {/* list Items */}
            <div className="list">
                {/* Slider items */}
                <div className="item active">
                    <img src={slider2} alt="Slider" />
                    {/*<div className="content">
                        <p>design</p>
                        <h2>Slider 01</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                        </p>
    </div>*/}
                </div>
                
             
                
               
            </div>
           
           
        </div>


<section class="section__container_App room__container_App">
      <p class="section__subheader_App">OUR APPROACH</p>
      <h6 class="section__header_App">Join us in reshaping the future of retail with AI-driven innovation and transformative solutions. Experience the power of NyKinSky Research & Analytics in driving growth, efficiency, and success for retailers worldwide.</h6>
      <div class="room__grid">
        <div class="room__card">
          <div class="room__card__image">
            <img src={img6} alt="room" />
          </div>
          <div class="room__card__details">
            <h4>Integrated AI/ML Solutions: </h4>
            <p>
            Leverage our comprehensive suite of AI/ML tools for seamless model development and deployment across a wide range of applications, including forecasting and inventory optimization.
            </p>
      
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={Approach_2} alt="room" />
            </div>
          <div class="room__card__details">
            <h4>Customer Insights Acceleration: </h4>
            <p>
            Utilize our templated accelerators and frameworks to extract actionable insights from customer data, enabling informed decision-making and maximizing customer lifetime value.
            </p>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={Approach_3 } alt="room" />
          </div>
          <div class="room__card__details">
            <h4>Simulation and Optimization: </h4>
            <p>
            Empower your business with the ability to simulate and optimize operations, effectively navigating supply chain disruptions and financial uncertainties.
            </p>
          </div>
        </div>
        <div class="room__card">
          <div class="room__card__image">
            <img src={Approach_4} alt="room" />
          </div>
          <div class="room__card__details">
            <h4> Precision Measurement:</h4>
            <p>
            Drive performance excellence through advanced measurement techniques such as market mix Modeling, multi-touch attribution, and rigorous testing methodologies. 
            </p>
          </div>
        </div>
      </div>
    </section>












      




   {/* Footer Section */}
  
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

export default Approach