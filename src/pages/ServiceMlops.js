import React, { useState, useEffect} from 'react';
import logo from '../Assets/images/nykinsky-logo.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons



import slider2 from '../Assets/images/Services_4.jpg';



import img6 from '../Assets/images/img6.jpg';


import '../Assets/styles/index.css';
import '../Assets/styles/carousel.css';
import '../Assets/styles/footer.css';
import '../Assets/styles/header.css';
import '../Assets/styles/MidSection.css';

import { Link } from 'react-router-dom';


function ServiceMlops() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    
    
    
   

    useEffect(() => {
     

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = currentScrollPos < prevScrollPos || currentScrollPos < 10;
         
            setVisible(isVisible);
           
            setPrevScrollPos(currentScrollPos);
            
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

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
  <div style={{ height: '115px' }}></div>


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






         {/* Middle Section 2 */}
<div id="main-section" className="landing-page-main mid-section sky-blue-background">
  <div className="left-aligned" style={{ paddingTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: '1', textAlign: 'center' }}>
        <div>
          <h1><b> MLOps  </b></h1>
          <hr />
          <br/>
          <h3><b>Seamless model and app deployment, scaling, and maintenance.</b>
</h3>
          <br/>
            <h4 style={{textAlign:'justify'}}>Any AI-driven business must prioritize cost-effectiveness, accelerated development cycles, and enhanced application and model performance. Organizations should have strong procedures that are backed by competent personnel and the appropriate instruments in order to do this.
</h4>
            <br/>
          <p className='para' style={{textAlign:'justify'}}>The Dev Ops and ML Ops services provided by NyKinSky Analytics adhere to best practices for software engineering and aid in the constant development, testing, deployment, and management of data products, ML models, and applications to promote growth and innovation.
          </p>
        </div>
      </div>
    </div>
  </div>
  <br/>
  </div>

  <div>
        <div className="left-aligned"  style={{textAlign:'center',paddingTop:'80px'}}>
      <h3 style={{textAlign:'center'}}><b>WHAT WE DO</b></h3>
    </div>
        <div>
            
            <div id="formList">
                
                <div id="list">
                    <div className="item1">
                        
                        <div className="content">
                            <table width="100%" cellSpacing="0"> 
                                <tr>
                                    <td colSpan="2" className="nameGroup" style={{color:'red'}}><b>MLOps strategy</b></td>   
                                </tr>
                                <tr style={{color:'white',  textAlign:'justify'}}>
                                    <td colSpan="2" className="nameGroup">With faster time-to-market for your AI model deployments and ongoing maintenance, you may choose the proper technology platform, set up the right processes, and organize the teams with the support of our expertise in developing ML Ops strategies for clients.</td>   
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        
                        <div className="content">
                            <table width="100%" cellSpacing="0"> 
                                <tr>
                                    <td colSpan="2" className="nameGroup" style={{color:'red'}}><b>MLOps services </b></td>   
                                </tr>
                                <tr style={{color:'white',  textAlign:'justify'}}>
                                    <td colSpan="2" className="nameGroup"  >
                                    By ensuring effective deployment and monitoring, our ML Ops services facilitate the operationalization of ML systems. Because of the experience and skills of our ML Ops team, ML solutions are quickly deployed from development to production.</td>   
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        
                        <div className="content">
                            <table width="100%" cellSpacing="0"> 
                                <tr>
                                    <td colSpan="2" className="nameGroup" style={{color:'red'}}><b>DevOps as a service</b></td>   
                                </tr>
                                <tr style={{color:'white',  textAlign:'justify'}}>
                                    <td colSpan="2" className="nameGroup">NyKinSky Analytics' Dev Ops-as-a-Service solutions automate the end-to-end delivery pipeline and enable continuous integration and development across top cloud platforms, assisting in the quick onboarding of apps and infrastructure. 
                                    </td>   
                                </tr>
                            </table>
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
    );
}

export default ServiceMlops;