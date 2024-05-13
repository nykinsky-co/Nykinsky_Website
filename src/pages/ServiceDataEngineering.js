import React, { useState} from 'react';
import '../Assets/styles/header.css';
import logo from '../Assets/images/nykinsky-logo.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

import img6 from '../Assets/images/img6.jpg';


import img1 from '../Assets/images/what.png';


import '../Assets/styles/whatwedo.css';
import myVideo from '../Assets/videos/What_we_do.mp4';

import { Link } from 'react-router-dom';

const ServiceDataEngineering = () => {
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

  <section class="box" style={{alignItems: 'center',
	padding: '110px 100px'}}>  
		<video autoPlay loop muted playsInline>
    <source src={myVideo} type="video/mp4" /> 
    </video>
		<h1>Data Engineering</h1>   
	</section>


    {/* Middle Section 2 */}
<div id="main-section" className="landing-page-main mid-section sky-blue-background">
  <div className="left-aligned" style={{ paddingTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: '1', textAlign: 'center' }}>
        <div>
          <h1><b>Data Engineering</b></h1>
          <hr />
          <br/>
          <p className='para' style={{textAlign:'justify'}}>
          
NyKinSky offers a comprehensive suite of cross-disciplinary capabilities, ranging from generative AI consulting to user experience (UX) design, model development, governance, change management, and ongoing managed services. We specialize in developing domain-specific models trained on specialized corpora, coupled with extensive dialogue interactions or dialogue-annotated data to perform advanced tasks. 
Additionally, enterprise teams can leverage our ecosystem of hyperscalers and data and AI independent software vendors (ISVs) to accelerate value realization.</p>
          <br/>
        
          <p className='para' style={{ textAlign:'justify'}}>Gain access to comprehensive end-to-end services and solutions for building a scalable generative AI framework. Partner with NyKinSky to develop a strategy, business case, and technology roadmap, and to create domain-specific corpora. Reimagine value-chain processes and create a new business architecture to foster innovation. Additionally, utilize our UX expertise, industrialized generative AI delivery capabilities, and managed services to effectively scale model development.
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
                  <h3>Leverage our full-spectrum generative AI expertise.</h3>
                  <p >Access our comprehensive capabilities in LLM engineering, development, operations, and platform engineering.</p>
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
                  <h3>Use our interdisciplinary knowledge.</h3>
                  <p>From developing and implementing data and AI strategies to supply chain management, marketing technologies, customer analytics, and more.</p>
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
                  <h3>Utilize accelerators for generative AI.</h3>
                  <p>Acquire skills in software development, enterprise search, and knowledge management.</p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>








         {/* Footer Section */}
         <footer class="footer" onClick={handleLinkClick} >
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
        <div class="footer-col"  >
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

export default ServiceDataEngineering
