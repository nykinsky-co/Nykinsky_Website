import React, { useState} from 'react';
import '../Assets/styles/header.css';
import logo from '../Assets/images/nykinsky-logo.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

import img6 from '../Assets/images/img6.jpg';


import img1 from '../Assets/images/text.jpg';


import '../Assets/styles/whatwedo.css';
import myVideo from '../Assets/videos/What_we_do.mp4';

import Slider from '../MyComponents/Slider';
import { Link } from 'react-router-dom';

const Whatwedo = () => {
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
          <img src={logo} alt="NyKinSky Logo" className="logo-image" style={{ width: '250px', height: 'auto', paddingTop: '10px', cursor: 'pointer' }} />
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
        <li style={{ marginRight: '20px' }} >
    <Link to="/join-global-office">Join Global Office</Link>
    </li>  
        

      </ul>
     
       


      
<label htmlFor="menu-btn" className="btn menu-btn"><FontAwesomeIcon icon={faBars} /></label>
      
    
    </div>

  
  </nav>
 
  <div style={{ height: '90px' }}></div>

  <section class="box" style={{alignItems: 'center',textAlign:'left',
	padding: '110px 100px'}}>  
		<video autoPlay loop muted playsInline>
    <source src={myVideo} type="video/mp4" /> 
    </video>
		<h1>What We do</h1> 
		<h3>NyKinSky & Company</h3>
		<Link to="#" class="boxBtn">Contact Us</Link>   
	</section>


    {/* Middle Section 2 */}
<div id="main-section" className="landing-page-main mid-section sky-blue-background">
  <div className="left-aligned" style={{ paddingTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: '1', textAlign: 'center' }}>
        <div>
          <h1><b>Artificial Intelligence Services</b></h1>
          <hr />
          <br/>
          <p className='para' style={{textAlign:'justify'}}>
            With NykinSky & Company AI Solutions, you may revolutionize your business with carefully crafted solutions tailored to your unique needs. Our morally sound, diligent, and perceptive approach ensures confidentiality and unbiased models,
             trustworthy implementations, and concrete, accurate, and useful findings.</p>
          <br/>
        
          <p className='para' style={{textAlign:'justify'}}>
          With 14 years of experience in developing and delivering solutions that go beyond technology, NykinSky & Company is ideally positioned to offer premium, 
          custom solutions that are in line with each company's unique character.
          </p>
        </div>
      </div>
    </div>
  </div>
  <br/>
  </div>
  {/* Updated part to display cards horizontally */}
  <div className="flip-main">
      <div className="container">
        <h1 style={{paddingBottom:'20px'}}>Our Solution</h1>
        <div className="row">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={img1} alt="flip-card" />
              </div>
              <div className="flip-card-back">
                <div className="text">
                  <h3>Text Summarization</h3>
                  <p>Distill complex content into concise, insightful summaries</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={img1} alt="flip-card" />
              </div>
              <div className="flip-card-back">
                <div className="text">
                  <h3>Name and Entity Recognition</h3>
                  <p>Seamlessly identify and extract crucial information.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={img1} alt="flip-card" />
              </div>
              <div className="flip-card-back">
                <div className="text">
                  <h3>Text Classification</h3>
                  <p>Streamline information categorization for improved organization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{paddingBottom:'50px'}}></div>

  








         {/* Footer Section */}
         <footer class="footer"  >
    <div class="container" >
      <div class="row">

      <div class="footer-col">
          <h4 style={{margin:'20px'}}>Our Services</h4>
          <ul>
            <li><Link to="/Services-AI">Aritifical Intelligence</Link></li>
            <li><Link to="/Cloud-Transformation">Cloud Transformation</Link></li>
            <li><Link to="/Data-Engineering">Data Engineering</Link></li>
            <li><Link to="/Generative-AI">Generative AI</Link></li>
            <li><Link to="/Experience-Consulting">Experience Consulting</Link></li>
            <li><Link to="/Application-Engineering">Application Engineering</Link></li>
            <li><Link to="/Business-Intelligence">Business Intelligence</Link></li>
            <li><Link to="/MLOps">MLOps</Link></li>
            <li><Link to="/Data-Science">Data Science</Link></li>
            <li><Link to="/AI-Engineering">AI Engineering</Link></li>
            <li><Link to="/ML-Products & Platforms">ML Products & Platforms</Link></li>

          </ul>
        </div>

        <div class="footer-col">
          <h4 style={{margin:'20px'}}>Industries</h4>
          <ul>
            <li><Link to="/indsutries">Retail</Link></li>
            <li><Link to="/industries-cpg">CPG</Link></li>
            <li><Link to="/industries-bfs">bfs</Link></li>
            <li><Link to="/industries-insurance">Insurance</Link></li>
            <li><Link to="/industries-Manufacturing">Manufacturing</Link></li>
            <li><Link to="/industries-Transportation-Logistics">Transportation & Logistics</Link></li>
            <li><Link to="/industries-Life-Science">Life Science</Link></li>
            <li><Link to="/industries-Healthcare">HealthCare</Link></li>
            <li><Link to="/industries-tech-telecom-media">Technology, Telecom & Media</Link></li>
           

          </ul>
        </div>

        <div class="footer-col">
          <h4 style={{margin:'20px'}}>Our Approach</h4>
          <ul>
            <li><Link to="/approach">Integrated AI/ML Solutions</Link></li>
            <li><Link to="/approach">Customer Insights Acceleration</Link></li>
            <li><Link to="/approach">Simulation & Optimization</Link></li>
            <li><Link to="/approach">Precision Measurement</Link></li>
            

          </ul>
        </div>

        <div class="footer-col">
          <h4 style={{margin:'20px'}}>company</h4>
          <ul>
            <li><Link to="/Services-AI">our services</Link></li>
            <li><Link to="#">privacy policy</Link></li>
          
          </ul>
        </div>
        <div class="footer-col"  onClick={handleLinkClick}  >
          <h4 style={{margin:'20px'}}>about us</h4>
          <ul>
            <li><Link to="/about-us" >Who we are</Link></li>
            <li><Link to="/about-us">Our Journey & Story </Link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 style={{margin:'20px'}}>Careers</h4>
          <ul>
            <li><Link to="#">Explore opportunities</Link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 style={{margin:'20px'}}>follow us</h4>
          <div className="social-links" style={{marginLeft:'10%'}}>
      
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

export default Whatwedo
