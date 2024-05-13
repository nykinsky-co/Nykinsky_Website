import React, { useState} from 'react';
import '../Assets/styles/header.css';
import '../Assets/styles/about.css';
import logo from '../Assets/images/nykinsky-logo.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

import img6 from '../Assets/images/img6.jpg';

import stats1 from '../Assets/images/services_2.jpg'
import stats2 from '../Assets/images/services_3.jpg'

import { Link } from 'react-router-dom';

const About = () => {
  const [visible] = useState(true);
  

  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = '/';
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


  <div>
  <header>
      
      <div class="section__container header__container" style={{color:'white'}} id="home">
        <h1>Join us on this journey.</h1>
      </div>
    </header>

    <section class="about" id="about">
      <div class="section__container about__container" style={{color:'white'}}>
        <div class="about__grid">
          <div class="about__content">
            <p class="section__subheader">About Us</p>
            <h2 class="section__header">Welcome to NyKinSky!</h2>
            <p class="para">
            NyKinSky, short for <b style={{color:'red'}}>"New Young Knight in Sky" </b>represents a collective of dynamic professionals spanning various fields such as Business Consulting, Data Science, Machine Learning Engineering, 
            Finance Leadership, Academia, Research, and Software Engineering. Our shared belief is in the power of knowledge, skills, and an analytical approach to solving multifaceted challenges across industries.
            </p>
            <br />
            <p class="para">
            At NyKinSky, we are driven by the conviction that with the right blend of expertise and collaborative teamwork, we can tackle a wide array of issues encompassing Business, Social Dynamics, Policy, and Digital Transformation. 
            Each member of our diverse team brings unique insights and specialized knowledge to the table, enabling us to craft innovative solutions and make a tangible impact wherever we engage.
            </p>
            <br />
            <p class = "para">
            Whether it's optimizing business strategies, harnessing the potential of data through advanced analytics, leveraging machine learning for predictive insights, navigating complex financial landscapes, shaping effective policies, or driving digital transformation initiatives, NyKinSky is committed to delivering excellence. Our team is dedicated to staying at the forefront of industry trends, continuously refining our skills, and applying cutting-edge techniques to address the evolving needs of our clients.
            Collaboration, innovation, and a passion for problem-solving are at the heart of everything we do. We thrive on challenges and embrace opportunities to create positive change. By harnessing the collective intelligence of our multidisciplinary team, NyKinSky stands ready to partner with you to overcome obstacles, seize opportunities, and chart a course towards success.
            </p>
          </div>
          <div class="about__list">
            <div class="about__item">
             
              <h4 style={{color:'orange'}}>Join us on this journey as we strive to make a meaningful difference in the world, one solution at a time.</h4>
            </div>
            <div class="about__item">
              
              <h4 style={{color:'red'}}>Welcome to NyKinSky – where expertise meets impact.</h4>
            </div>
            
          </div>
        </div>
      </div>
    </section>














  </div>


    <div>
   <section class="stats" id="stats">
      <div class="section__container stats__container" style={{color:'white'}}>
        <div class="stats__content">
          <p class="section__subheader">Company</p>
          <h2 class="section__header">Our Journey & Story</h2>
          <div class="stats__grid">
            <div class="stats__card">
              <h4>2010</h4>
              <p>Founded</p>
            </div>
            <div class="stats__card">
              <h4>2019</h4>
              <p>officially registering as a business entity</p>
            </div>
          </div>
          <p class="para">
          The journey of NyKinSky has been one of continuous growth, innovation, and impact since its inception in 2010. 
          What began as a vision to harness the collective expertise of a diverse team of professionals has evolved into a dynamic force driving positive change across industries.
          </p>
         
          <p class="para">
          In 2010, NyKinSky was founded with a clear mission: to bring together experts from various fields to tackle complex challenges and make a meaningful impact. Over the years, our team steadily expanded, growing from humble beginnings to a sizeable workforce ranging from 2 to 50 members by 2024. 
          This growth reflects our commitment to assembling the best talent and fostering a culture of collaboration and excellence.
          </p>
          <p class="para">
          In 2019, NyKinSky took a significant step forward by officially registering as a business entity, marking a milestone in our journey towards greater recognition and credibility. This pivotal moment solidified our commitment to professionalism, accountability, and integrity in all our endeavors.
          </p>
          <p class="para">
          Since our inception, NyKinSky has undertaken a wide range of projects, including 7 government initiatives aimed at addressing pressing societal issues and driving positive change. 
          Our client base has expanded to encompass 35 organizations across diverse sectors such as Retail, Finance, Banking, Insurance, Technology, Supply Chain, Analytics, Telecom, and Research. These partnerships attest to our ability to deliver value and drive results across a broad spectrum of industries.
          </p>
        </div>
        <div class="stats__image">
          <img src={stats1} alt="stats" />
          <img src={stats2} alt="stats" />
        </div>
      </div>
    </section>

    <section class="banner">
      <div class="section__container banner__container">
        <div class="banner__content" style={{color:'white'}}>
          <p class="section__subheader" style={{color:'white'}}>More Info</p>
          <h2 class="section__header">
            We Believe In Building Long Lasting Business Relationships
          </h2>
          <p class="para">
          In the realm of business innovation, NyKinSky has pioneered 15 groundbreaking initiatives aimed at reshaping traditional paradigms, optimizing processes, and unlocking new opportunities for growth and efficiency. Our track record of product delivery stands at an impressive 27 successful launches, 
          each representing a culmination of meticulous planning, execution, and client collaboration. However, our impact extends far beyond mere numbers. Through our services and problem-solving prowess, NyKinSky has positively impacted over 75 organizations, addressing a diverse array of challenges, and driving tangible results. Whether it's optimizing operations, enhancing customer experiences, 
          or unlocking new revenue streams, our team is dedicated to delivering innovative solutions that make a lasting difference.
          </p>
          <p>
          As we reflect on the past 14 years of our journey, we are grateful for the trust and support of our clients, partners, and team members who have been instrumental in our success. Looking ahead, NyKinSky remains steadfast in our commitment to pushing the boundaries of possibility, driving innovation, and making a meaningful impact in the years to come...
          </p>
          
        </div>
      </div>
    </section>
    </div>
  

   {/* Footer Section */}
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

export default About