import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";

import logo from "../Assets/images/NyK.png"; // Import your logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "../Assets/styles/global.css";

import slider2 from "../Assets/images/services_2.jpg";

import img6 from "../Assets/images/img6.jpg";

import call from "../Assets/images/phone.png";
import email from "../Assets/images/email.png";
import location from "../Assets/images/location.png";

import "../Assets/styles/footer.css";

import { Link } from "react-router-dom";

function GlobalOffice() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j2rqpsc", "template_zgoufh4", form.current, {
        publicKey: "AUzOi6othbTEQL-NC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
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
                <h2> &#x1F680; Get In Touch</h2>
                <p>
                  NyKinSky & Company - Back Office Outsourcing Franchise
                  Opportunity
                </p>
              </div>

              {/* Contact Info */}
              <div className="contactInfo">
                <div className="iconGroup">
                  <img src={call} class="icon" alt="" />

                  <div className="details">
                    <span>Phone</span>
                    <span>+91-9717698567</span>
                  </div>
                </div>
                <div class="iconGroup">
                  <img src={email} class="icon" alt="" />

                  <div class="details">
                    <span>Email</span>
                    <span>info@nykinsky.com</span>
                  </div>
                </div>

                <div class="iconGroup">
                  <img src={location} class="icon" alt="" />

                  <div class="details">
                    <span>Location</span>
                    <span>Sector 63, Noida UP 201301</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Right Section */}
            <section className="col right">
              {/* Form */}

              <form ref={form} onSubmit={sendEmail} className="messageForm">
                <div className="inputGroup fullWidth">
                  <select name="dropdown1" id="office" required>
                    <option value="">Please Select Office</option>
                    <option value="NyKinSky Consultant Office ">
                      NyKinSky Consultant Office{" "}
                    </option>
                    <option value="NyKinSky Project Office">
                      NyKinSky Project Office
                    </option>
                    <option value="NyKinSky Regional Office">
                      NyKinSky Regional Office
                    </option>
                    <option value="NyKinSky Associative Office/Collection Centre">
                      NyKinSky Associative Office/Collection Centre
                    </option>
                  </select>
                </div>

                <div className="inputGroup fullWidth">
                  <select name="dropdown2" id="state" required>
                    <option value="">Select State</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadra and Nagar Haveli">
                      Dadra and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>

                <div className="inputGroup fullWidth">
                  <select name="dropdown3" id="city" required>
                    <option value="">Select City</option>
                    <option value="Agra">Agra</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Ajmer">Ajmer</option>
                    <option value="Alappuzha">Alappuzha</option>
                    <option value="Aligarh">Aligarh</option>
                    <option value="Allahabad">Allahabad</option>
                    <option value="Alwar">Alwar</option>
                    <option value="Ambala">Ambala</option>
                    <option value="Amravati">Amravati</option>
                    <option value="Amritsar">Amritsar</option>
                    <option value="Anand">Anand</option>
                    <option value="Anantapur">Anantapur</option>
                    <option value="Asansol">Asansol</option>
                    <option value="Aurangabad">Aurangabad</option>
                    <option value="Bareilly">Bareilly</option>
                    <option value="Belagavi">Belagavi</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Bharatpur">Bharatpur</option>
                    <option value="Bharuch">Bharuch</option>
                    <option value="Bhilai">Bhilai</option>
                    <option value="Bhilwara">Bhilwara</option>
                    <option value="Bhiwandi">Bhiwandi</option>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Bhubaneswar">Bhubaneswar</option>
                    <option value="Bikaner">Bikaner</option>
                    <option value="Bilaspur">Bilaspur</option>
                    <option value="Bokaro Steel City">Bokaro Steel City</option>
                    <option value="Bongaigaon">Bongaigaon</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Cuttack">Cuttack</option>
                    <option value="Daman">Daman</option>
                    <option value="Dehradun">Dehradun</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Dhanbad">Dhanbad</option>
                    <option value="Dharamshala">Dharamshala</option>
                    <option value="Dibrugarh">Dibrugarh</option>
                    <option value="Dindigul">Dindigul</option>
                    <option value="Durg">Durg</option>
                    <option value="Erode">Erode</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Firozabad">Firozabad</option>
                    <option value="Gandhinagar">Gandhinagar</option>
                    <option value="Gangtok">Gangtok</option>
                    <option value="Gaya">Gaya</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Goa">Goa</option>
                    <option value="Gorakhpur">Gorakhpur</option>
                    <option value="Greater Noida">Greater Noida</option>
                    <option value="Guntur">Guntur</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Guwahati">Guwahati</option>
                    <option value="Gwalior">Gwalior</option>
                    <option value="Haldwani">Haldwani</option>
                    <option value="Haridwar">Haridwar</option>
                    <option value="Hisar">Hisar</option>
                    <option value="Hooghly">Hooghly</option>
                    <option value="Howrah">Howrah</option>
                    <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Imphal">Imphal</option>
                    <option value="Indore">Indore</option>
                    <option value="Jabalpur">Jabalpur</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Jalandhar">Jalandhar</option>
                    <option value="Jammu">Jammu</option>
                    <option value="Jamnagar">Jamnagar</option>
                    <option value="Jamshedpur">Jamshedpur</option>
                    <option value="Jhansi">Jhansi</option>
                    <option value="Jodhpur">Jodhpur</option>
                    <option value="Junagadh">Junagadh</option>
                    <option value="Kakinada">Kakinada</option>
                    <option value="Kalyan-Dombivali">Kalyan-Dombivali</option>
                    <option value="Kanpur">Kanpur</option>
                    <option value="Karaikudi">Karaikudi</option>
                    <option value="Karnal">Karnal</option>
                    <option value="Kochi">Kochi</option>
                    <option value="Kohima">Kohima</option>
                    <option value="Kolhapur">Kolhapur</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Kollam">Kollam</option>
                    <option value="Kota">Kota</option>
                    <option value="Kottayam">Kottayam</option>
                    <option value="Kozhikode">Kozhikode</option>
                    <option value="Kurnool">Kurnool</option>
                    <option value="Kurukshetra">Kurukshetra</option>
                    <option value="Latur">Latur</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Ludhiana">Ludhiana</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Maheshtala">Maheshtala</option>
                    <option value="Malegaon">Malegaon</option>
                    <option value="Mangalore">Mangalore</option>
                    <option value="Mathura">Mathura</option>
                    <option value="Meerut">Meerut</option>
                    <option value="Mira-Bhayandar">Mira-Bhayandar</option>
                    <option value="Moradabad">Moradabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Muzaffarnagar">Muzaffarnagar</option>
                    <option value="Muzaffarpur">Muzaffarpur</option>
                    <option value="Mysore">Mysore</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Nanded">Nanded</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Nellore">Nellore</option>
                    <option value="Noida">Noida</option>
                    <option value="North Dumdum">North Dumdum</option>
                    <option value="Ongole">Ongole</option>
                    <option value="Orai">Orai</option>
                    <option value="Ozhukarai">Ozhukarai</option>
                    <option value="Pali">Pali</option>
                    <option value="Panaji">Panaji</option>
                    <option value="Panipat">Panipat</option>
                    <option value="Parbhani">Parbhani</option>
                    <option value="Patiala">Patiala</option>
                    <option value="Patna">Patna</option>
                    <option value="Pimpri-Chinchwad">Pimpri-Chinchwad</option>
                    <option value="Port Blair">Port Blair</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Pune">Pune</option>
                    <option value="Purnia">Purnia</option>
                    <option value="Raipur">Raipur</option>
                    <option value="Rajahmundry">Rajahmundry</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Rampur">Rampur</option>
                    <option value="Ranchi">Ranchi</option>
                    <option value="Ratlam">Ratlam</option>
                    <option value="Rewa">Rewa</option>
                    <option value="Rohtak">Rohtak</option>
                    <option value="Rourkela">Rourkela</option>
                    <option value="Sagar">Sagar</option>
                    <option value="Saharanpur">Saharanpur</option>
                    <option value="Salem">Salem</option>
                    <option value="Sambalpur">Sambalpur</option>
                    <option value="Satara">Satara</option>
                    <option value="Satna">Satna</option>
                    <option value="Shillong">Shillong</option>
                    <option value="Shimla">Shimla</option>
                    <option value="Siliguri">Siliguri</option>
                    <option value="Solapur">Solapur</option>
                    <option value="Sonipat">Sonipat</option>
                    <option value="Srinagar">Srinagar</option>
                    <option value="Surat">Surat</option>
                    <option value="Thane">Thane</option>
                    <option value="Thanjavur">Thanjavur</option>
                    <option value="Thiruvananthapuram">
                      Thiruvananthapuram
                    </option>
                    <option value="Thrissur">Thrissur</option>
                    <option value="Tiruchirappalli">Tiruchirappalli</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Tirupati">Tirupati</option>
                    <option value="Tiruppur">Tiruppur</option>
                    <option value="Tiruvannamalai">Tiruvannamalai</option>
                    <option value="Udaipur">Udaipur</option>
                    <option value="Ujjain">Ujjain</option>
                    <option value="Ulhasnagar">Ulhasnagar</option>
                    <option value="Vadodara">Vadodara</option>
                    <option value="Varanasi">Varanasi</option>
                    <option value="Vasai-Virar">Vasai-Virar</option>
                    <option value="Vellore">Vellore</option>
                    <option value="Vijayawada">Vijayawada</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Warangal">Warangal</option>
                    <option value="Yamunanagar">Yamunanagar</option>
                  </select>
                </div>

                <div className="inputGroup halfWidth">
                  <input type="text" name="from_name" required />
                  <label>Your Name</label>
                </div>

                <div className="inputGroup halfWidth">
                  <input type="email" name="from_email" required />
                  <label htmlFor="email">Email</label>
                </div>

                <div
                  className="inputGroup halfWidth"
                  style={{ paddingTop: "10px" }}
                >
                  <input type="mobile" name="from_mobile" required />
                  <label htmlFor="mobile">Mobile Number</label>
                </div>

                <div
                  className="inputGroup halfWidth"
                  style={{ paddingTop: "10px" }}
                >
                  <input type="text" name="from_quli" required />
                  <label htmlFor="subject">Highest Qualification</label>
                </div>

                <div
                  className="inputGroup fullWidth"
                  style={{ paddingTop: "10px" }}
                >
                  <input type="text" name="work_exp" required />
                  <label htmlFor="subject">Work Experience</label>
                </div>


                
                <div
                  className="inputGroup fullWidth"
                  style={{ paddingTop: "10px" }}
                >
                  <input type="url" name="profile_id" required />
                  <label htmlFor="subject">Upload your Profile Photo (Drive Link)</label>
                </div>

               

                <div
                  className="inputGroup halfWidth"
                  style={{ paddingTop: "10px" }}
                >
                  <input type="url" name="linkedin_id" required />
                  <label htmlFor="subject">linkedin Id</label>
                </div>

                <div
                  className="inputGroup halfWidth"
                  style={{ paddingTop: "10px" }}
                >
                  <input type="url" name="licence" />
                  <label htmlFor="subject">Any licence</label>
                </div>

                <div className="inputGroup fullWidth">
                  <textarea name="message"></textarea>
                  <label htmlFor="message">Why You Are Interested</label>
                </div>

                <div className="inputGroup fullWidth">
                  <button>Send Message</button>
                </div>
              </form>
            </section>
          </main>
        </div>
      </div>

      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <Link to="/Services-AI">our services</Link>
                </li>
                <li>
                  <Link to="#">privacy policy</Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>about us</h4>
              <ul>
                <li>
                  <Link to="/about-us">Who we are</Link>
                </li>
                <li>
                  <Link to="/about-us">Our Journey & Story </Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Careers</h4>
              <ul>
                <li>
                  <Link to="#">Explore opportunities</Link>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <Link to="https://www.instagram.com/nykinsky/" target="blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/nykinsky/mycompany/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ borderColor: "white" }} />{" "}
        {/* Horizontal line with white color */}
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <p style={{ color: "white" }}>
                &copy;{" "}
                <span style={{ whiteSpace: "nowrap" }}>
                  {new Date().getFullYear()} NyKinSky & Company. All rights
                  reserved.
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GlobalOffice;
