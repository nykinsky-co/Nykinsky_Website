import React, { useState} from 'react';
import '../Assets/styles/header.css';
import '../Assets/styles/industries.css';

import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

import img6 from '../Assets/images/img6.jpg';

import imgHeaderIndustries from '../Assets/images/header-1.jpeg';
import { Link } from 'react-router-dom';

const Industries = () => {
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



  <header class="header1" id="home" 
   style={{
    width: '100%', 
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0), #0a1e27), url(${imgHeaderIndustries})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
    transform: 'translateZ(0)'
  }}>
      
      <div class="section1__container header1__container">
        <div class="header1__content">
          <h3 class="section1__subheader">OUR INDUSTRIES</h3>
          <h1 class="section1__header">
          Reimagine Retail with an AI-first approach!
          </h1>
        </div>
       
      </div>
    </header>
    <section class="about1">
      <div class="section1__container about1__container">
      <h3 style={{color:'white'}} class="section__subheader">Retail</h3>
        <div class="about1__content about1__content-1">
          
          <h2 class="section1__header">Revolutionize Retail through Cutting-Edge AI Solutions</h2>
          <p>
          Unlock the potential of data-driven insights and artificial intelligence to revolutionize the retail landscape. 
          NyKinSky Research & Analytics offers innovative solutions designed to propel retailers towards unprecedented growth and success..
          </p>
          <div class="about1__btn">
            <Link to="#">
              Read more
              <span><i class="ri-arrow-right-line"></i></span>
            </Link>
          </div>
        </div>
        
        <div class="about1__content about1__content-2">
          
          <h2 class="section1__header">Elevate Retail Operations with Next-Generation Solutions</h2>
          <p>
          In today's fast-paced retail environment, staying competitive requires more than just traditional analytics. NyKinSky Research & Analytics empowers retailers to reimagine their operations with agile, future-proof solutions that adapt to evolving market dynamics.
          </p>
          <div class="about1__btn">
            <Link to="#">
              Read more
              <span><i class="ri-arrow-right-line"></i></span>
            </Link>
          </div>
        </div>
        
        <div class="about1__content about1__content-3">
          
          <h2 class="section1__header">Transforming Retail with Advanced AI Capabilities</h2>
          <p>
          NyKinSky Research & Analytics specializes in providing retailers with advanced AI and analytics solutions tailored to meet the demands of an ever-changing technological landscape. Our expertise in AI/ML, coupled with simulation capabilities and data-driven decision support frameworks, ensures that retailers can thrive amidst uncertainty and complexity.
          </p>
          <div class="about1__btn">
            <Link to="#">
              Read more
              <span><i class="ri-arrow-right-line"></i></span>
            </Link>
          </div>
        </div>
      </div>
    </section>

















 




  
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

export default Industries