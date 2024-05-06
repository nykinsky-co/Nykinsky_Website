import React, { useState, useEffect, useRef } from "react";


import "react-toastify/dist/ReactToastify.css";

import logo from "../Assets/images/NyK.png"; // Import your logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "../Assets/styles/global.css";

import slider2 from "../Assets/images/services_2.jpg";

import img6 from "../Assets/images/img6.jpg";


import "../Assets/styles/footer.css";

import { Link } from "react-router-dom";

function Eligibility() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [selectedPGSubject, setSelectedPGSubject] = useState('');
  const [stream, setStream] = useState('');
  const [ugSubject, setUGSubject] = useState('');
  const [phdResearch, setPhdResearch] = useState('');

  const handleStreamChange = (event) => {
    setStream(event.target.value);
  };

  const handleUGSubjectChange = (event) => {
    setUGSubject(event.target.value);
  };

  const handlePhdResearchChange = (event) => {
    setPhdResearch(event.target.value);
  };

const handlePGSubjectChange = (e) => {
  const value = e.target.value;
  setSelectedPGSubject(value);
};

const [message, setMessage] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const work = formData.get('Work');

    let newMessage = '';
    if (work === '0-5+') {
      newMessage = 'Congratulations! You are eligible for NyKinSky Associative Office.';
    } else if (work === '5+') {
      newMessage = 'Congratulations! You are eligible for NyKinSky Consultant Office.';
    } else if (work === '10+') {
      newMessage = 'Congratulations! You are eligible for NyKinSky Project Office.';
    } else if (work === '15+') {
      newMessage = 'Congratulations! You are eligible for NyKinSky Regional Office.';
    } 

    setMessage(newMessage);
  };
  
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        currentScrollPos < prevScrollPos || currentScrollPos < 10;

      setVisible(isVisible);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = "/";
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
        <li style={{ marginRight: '20px' }} >
    <Link to="/join-global-office">Join Global Office</Link>
    </li>  
        

      </ul>
     
       


      
<label htmlFor="menu-btn" className="btn menu-btn"><FontAwesomeIcon icon={faBars} /></label>
      
    
    </div>

  
  </nav>
      <div style={{ height: "115px" }}></div>

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

      <div className="global-lite">
        <div className="global">
          <main className="row">
            {/* Left Section */}
            <section className="col left">
              {/* Title */}
              <div className="contactTitle">
                <h2>Plese Check Your Eligibility First </h2>
                <p>
                  NyKinSky & Company - Back Office Outsourcing Franchise
                  Opportunity
                </p>
              </div>


              <div className="inputGroup fullWidth">
              <Link to="/join-global-office">
                 <button>Go Back And Apply</button>
              </Link>
                </div>

            </section>

            {/* Right Section */}
            <section className="col right">
              {/* Form */}

              <form ref={form} onSubmit={handleSubmit} className="messageForm">
               
                <div className="inputGroup fullWidth">
                  <select name="education" id="education" required>
                    <option value="">Education Qualification</option>
                    <option value="Graduate">Graduate
                    </option>
                    <option value="Post-Graduate">Post-Graduate</option>
                    <option value="Phd">Phd</option>
                  </select>
                </div>

                <div className="inputGroup fullWidth">
  <select name="stream" id="stream" required onChange={handleStreamChange}>
    <option value="">Stream</option>
    <option value="Finance">Finance (CA/CFA)</option>
    <option value="IT">IT (Development/Project)</option>
    <option value="Analytics">Analytics (DS/AI/ML)</option>
    <option value="Management">Management</option>
    <option value="Arts">Arts</option>
    <option value="Others">Others</option>
  </select>
</div>
{stream === 'Others' && (
  <div className="inputGroup fullWidth">
    <input type="text" name="streamOther" placeholder="Enter other stream" required />
  </div>
)}

<div className="inputGroup fullWidth">
  <select name="dropdown2" id="state" required onChange={handleUGSubjectChange}>
    <option value="">UG Subject</option>
    <option value="Computer-Science">Computer Science</option>
    <option value="Information-Technology">Information Technology</option>
    <option value="Electrical-Engineering">Electrical Engineering</option>
    <option value="Finance">Finance</option>
    <option value="Business-Administration">Business Administration</option>
    <option value="Others">Others</option>
  </select>
</div>
{ugSubject === 'Others' && (
  <div className="inputGroup fullWidth">
    <input type="text" name="ugSubjectOther" placeholder="Enter other UG subject" required />
  </div>
)}

               


                <div className="inputGroup fullWidth">
                    <select name="dropdown2" id="state" required onChange={handlePGSubjectChange}>
                       <option value="">PG Subject</option>
                     <option value="Graduate">Computer Science</option>
                     <option value="Artificial-Intelligence">Artificial Intelligence</option>
                     <option value="Machine-Learning">Machine Learning</option>
                      <option value="Data-Science">Data Science</option>
                     <option value="Marketing Strategy">Marketing Strategy</option>
                    <option value="Other">Other</option>
                   </select>
                </div>
               {selectedPGSubject === 'Other' && (
                <div className="inputGroup fullWidth">
                <input type="text" name="otherPGSubject" placeholder="Enter Other PG Subject" />
                </div>
                )}

<div className="inputGroup fullWidth">
  <select name="dropdown2" id="state" required onChange={handlePhdResearchChange}>
    <option value="">PHD Research</option>
    <option value="Computer-Science-Engineering">Computer Science and Engineering</option>
    <option value="Electrical-and-Electronics-Engineering">Electrical and Electronics Engineering</option>
    <option value="Mechanical-Engineering">Mechanical Engineering</option>
    <option value="Civil-Environmental-Engineering">Civil and Environmental Engineering</option>
    <option value="Others">Others</option>
  </select>
</div>
{phdResearch === 'Others' && (
  <div className="inputGroup fullWidth">
    <input type="text" name="phdResearchOther" placeholder="Enter other PHD research" required />
  </div>
)}




<div className="inputGroup fullWidth">
          <select name="Work" required>
            <option value="">Work Experience</option>
            <option value="0-5+">0-5+</option>
            <option value="5+">5+</option>
            <option value="10+">10+</option>
            <option value="15+">15+</option>
          </select>
        </div>

            
                <div className="inputGroup fullWidth">
                  <input type="text" name="from_name" required />
                  <label>Your Interested Stream</label>
                </div>


                <div className="inputGroup fullWidth">
                  <button>Check</button>
                </div>

              </form>
               {message && <p>{message}</p>}
            </section>
          </main>
        </div>
      </div>

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

export default Eligibility;
