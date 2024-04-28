import React, { useState, useEffect} from 'react';
import logo from '../Assets/images/NyK.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons



import slider2 from '../Assets/images/services_2.jpg';



import img6 from '../Assets/images/img6.jpg';


import '../Assets/styles/index.css';
import '../Assets/styles/carousel.css';
import '../Assets/styles/footer.css';
import '../Assets/styles/header.css';
import '../Assets/styles/MidSection.css';

import { Link } from 'react-router-dom';


function ServiceApplication() {
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
          <h1><b>Application Engineering  </b></h1>
          <hr />
          <br/>
          <p className='para'>Utilize intelligent applications to guide decisions and activities.</p>
          <br/>
            <h1><b>Create and execute apps with AI at its core</b></h1>
            <br/>
          <p className='para'>Today's enterprises require AI applications that are flexible. With its Application Engineering services, NyKinSky Analytics can enable this by providing cross-platform, cloud-native, modular applications for your AI/ML engines. When creating web and mobile applications, our team of skilled software engineers uses cloud-first development methodologies and agile engineering techniques. 
          These clever user interfaces aid in bridging the knowledge gap between corporate users and insights.
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
                                    <td colSpan="2" className="nameGroup" style={{color:'red'}}><b>Design and prototyping guided by UX</b></td>   
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">In order to better understand user behavior and chart the path they take when interacting with the product, we assist in improving user experiences.</td>   
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        
                        <div className="content">
                            <table width="100%" cellSpacing="0"> 
                                <tr>
                                    <td colSpan="2" className="nameGroup" style={{color:'red'}}><b>Low- and no-code software</b></td>   
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup"  >
                                    When necessary, we develop power apps with little or no coding. These can be used to automate graphical user interfaces and procedures that integrate with pre-built application components. Applications ranging from personalized dashboards to AI-integrated goods are among them.</td>   
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        
                        <div className="content">
                            <table width="100%" cellSpacing="0"> 
                                <tr>
                                    <td colSpan="2" className="nameGroup" style={{color:'red'}}><b>Agile application engineering can provide you a competitive advantage.</b></td>   
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Our approach to creating intelligent digital applications involves utilizing agile engineering techniques, selecting components and technology stacks that closely match your enterprise architecture, keeping a human-centered design, and conducting frequent reviews with end users to integrate modifications in an organized way.</td>   
                                </tr>
                            </table>
                        </div>
                    </div>

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
            <li><Link to="#">our services</Link></li>
            <li><Link to="#">privacy policy</Link></li>
            <li><Link to="#">affiliate program</Link></li>
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
    );
}

export default ServiceApplication;