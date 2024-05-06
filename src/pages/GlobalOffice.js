import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import jsPDF from "jspdf";

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

const GlobalOffice = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);

  const form = useRef();

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

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    // Here you would fetch cities based on the selected state
    // For demonstration purposes, I'll simulate fetching cities
    // Replace this with your actual logic to fetch cities
    const fetchedCities = fetchCitiesForState(state);
    setCities(fetchedCities);
  };

  const fetchCitiesForState = (state) => {
    
    const stateCities = {
      'Andaman and Nicobar Islands': ['Port Blair'],
      'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur'],
      'Arunachal Pradesh': ['Itanagar', 'Naharlagun'],
      Assam: ['Guwahati', 'Dibrugarh', 'Silchar'],
      Bihar: ['Patna', 'Gaya', 'Bhagalpur'],
      Chandigarh: ['Chandigarh'],
      Chhattisgarh: ['Raipur', 'Bilaspur', 'Durg'],
      'Dadra and Nagar Haveli': ['Silvassa'],
      'Daman and Diu': ['Daman', 'Diu'],
      Delhi: ['New Delhi', 'Noida', 'Gurgaon'],
      Goa: ['Panaji', 'Madgaon'],
      Gujarat: ['Ahmedabad', 'Surat', 'Vadodara'],
      Haryana: ['Faridabad', 'Gurgaon', 'Panipat'],
      'Himachal Pradesh': ['Shimla', 'Manali', 'Dharamshala'],
      'Jammu and Kashmir': ['Srinagar', 'Jammu'],
      Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad'],
      Karnataka: ['Bangalore', 'Mysore', 'Hubballi'],
      Kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode'],
      Ladakh: ['Leh', 'Kargil'],
      Lakshadweep: ['Kavaratti'],
      'Madhya Pradesh': ['Bhopal', 'Indore', 'Jabalpur'],
      Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
      Manipur: ['Imphal'],
      Meghalaya: ['Shillong'],
      Mizoram: ['Aizawl'],
      Nagaland: ['Kohima'],
      Odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela'],
      Puducherry: ['Puducherry', 'Karaikal'],
      Punjab: ['Chandigarh', 'Ludhiana', 'Amritsar'],
      Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota'],
      Sikkim: ['Gangtok'],
      'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
      Telangana: ['Hyderabad', 'Warangal', 'Nizamabad'],
      Tripura: ['Agartala'],
      'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Varanasi'],
      Uttarakhand: ['Dehradun', 'Haridwar', 'Rishikesh'],
      'West Bengal': ['Kolkata', 'Asansol', 'Durgapur'],
    };
    return stateCities[state] || [];
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

     // Generate PDF
     const doc = new jsPDF();
     doc.text(20, 20, "Form Data:");
     let yPos = 30;
     Object.entries(data).forEach(([key, value]) => {
       doc.text(20, yPos, `${key}: ${value}`);
       yPos += 10;
     });
     
      // Get the PDF file object
    const pdfBlob = doc.output("blob");


    emailjs
      .sendForm("service_c0i8nss", "template_asa4895", form.current,  {
        publicKey: "7cyET3ZpEKy2YdFgj",
        pdf_attachment: pdfBlob, // Attach the PDF file as "pdf_attachment"
        
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

              <div className="inputGroup fullWidth">
                <Link to="/Eligibility-Check">
                  <button>Check Your Eligibility</button>
                </Link>
              </div>
            </section>

            {/* Right Section */}
            <section className="col right">
              {/* Form */}

              <form ref={form} onSubmit={sendEmail} className="messageForm">
                <div className="inputGroup fullWidth">
                  <select name="dropdown1" id="office" required>
                    <option value="">Please Select Office<span className="requiredStar" > *</span></option>
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

                <div className="inputGroup fullWidth ">
                  <select name="dropdown2" id="state" required onChange={handleStateChange}>
                    <option value="">Select State<span className="requiredStar" > *</span></option>
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
            <option value="">Select City<span className="requiredStar" > *</span></option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
                </div>

                <div className="inputGroup halfWidth">
                  <input type="text" name="from_name" required />
                  <label>Your Name<span className="requiredStar" > *</span> </label>
                </div>

                <div className="inputGroup halfWidth">
                  <input type="email" name="from_email" required />
                  <label htmlFor="email">Email<span className="requiredStar" > *</span></label>
                </div>

                <div
                  className="inputGroup fullWidth"
                  style={{ paddingTop: "10px" }}
                >
                  <input type="mobile" name="from_mobile" required />
                  <label htmlFor="mobile">Mobile Number<span className="requiredStar" > *</span></label>
                </div>




                <div style={{ paddingTop: '60px'}}>
      <h6>Education Qualification<span className="requiredStar" > *</span></h6>
      <div style={{ paddingTop: '10px', textAlign: 'center' }}>
        <table style={{ width: '100%', textAlign: 'center', borderCollapse: 'collapse' }}>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Education</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name and Year</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>GPA/PERCENTAGE</th>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>10th Class<span className="requiredStar" > *</span></td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}><input type="text"  name="10th" required /></td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}><input type="text"  name="10th" required /></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>12th Class<span className="requiredStar" > *</span></td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}><input type="text" name="12th" required  /></td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}><input type="text" name="12th"  required /></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}> UG Degree<span className="requiredStar" > *</span></td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}><input type="text" name="ug" required  /></td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}><input type="text" name="ug" required /></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}> PG Degree<span className="requiredStar" > *</span></td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}><input type="text" name="pg"  required /></td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}><input type="text" name="pg" required  /></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>PHD/Research</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}><input type="text" name="phd" /></td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}><input type="text" name="phd"  /></td>
          </tr>
                    </table>
                  </div>
                </div>


    <div style={{ paddingTop: "60px" }}>
  <h6>Work Experience<span className="requiredStar" > *</span></h6>
  <div style={{ paddingTop: "20px", textAlign: "center" }}>
    <table style={{ width: "100%", textAlign: "center", borderCollapse: "collapse" }}>
      <tr>
        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name of Company</th>
        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Designation</th>
        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Location</th>
        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Domain</th>
      </tr>
      <tr>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="name1" placeholder="Name"  required/></td>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="designation1" placeholder="Designation" required /></td>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="location1" placeholder="Location" required /></td>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="domain1" placeholder="Domain" required  /></td>
      </tr>

      <tr>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="name1" placeholder="Name"  /></td>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="designation1" placeholder="Designation"  /></td>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="location1" placeholder="Location"/></td>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="domain1" placeholder="Domain"  /></td>
      </tr>

      <tr>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="name1" placeholder="Name"  /></td>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="designation1" placeholder="Designation"  /></td>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="location1" placeholder="Location"  /></td>
        <td style={{ border: "1px solid #ccc", padding: "8px" }}><input type="text" name="domain1" placeholder="Domain"  /></td>
      </tr>
                    </table>
                  </div>
                </div>

                <div
                  className="inputGroup halfWidth"
                  style={{ paddingTop: "50px" }}
                >
                  <input type="text" name="licence" />
                  <label htmlFor="licence">Any licence</label>
                </div>

                <div
                  className="inputGroup halfWidth"
                  style={{ paddingTop: "50px" }}
                >
                  <input type="number" name="licence_no" />
                  <label htmlFor="number">licence No</label>
                </div>

                <div
                  className="inputGroup fullWidth"
                  style={{ paddingTop: "10px" }}
                >
                  <input type="url" name="profile_id" required />
                  <label htmlFor="subject">
                    Upload your Profile Photo (Drive Link)<span className="requiredStar" > *</span>
                  </label>
                </div>

                <div
                  className="inputGroup halfWidth"
                  style={{ paddingTop: "10px" }}
                >
                  <input type="url" name="linkedin_id" required />
                  <label htmlFor="subject">linkedin Id<span className="requiredStar" > *</span></label>
                </div>

                <div
                  className="inputGroup halfWidth"
                  style={{ paddingTop: "10px" }}
                >
                  <select name="working" id="working" required>
                    <option value="">Already Working?<span className="requiredStar" > *</span></option>
                    <option value="YES ">YES</option>
                    <option value="NO">NO</option>
                  </select>
                </div>

                <div
                  className="inputGroup halfWidth"
                  style={{ paddingTop: "10px" }}
                >
                  <input type="text" name="domain" required />
                  <label htmlFor="subject">Which Domain<span className="requiredStar" > *</span></label>
                </div>

                <div className="inputGroup fullWidth">
                  <textarea name="message"></textarea>
                  <label htmlFor="message">Why You Are Interested<span className="requiredStar" > *</span></label>
                </div>

   

                <div className="inputGroup fullWidth">
                  <button>Send Message</button>
                </div>
              </form>
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

export default GlobalOffice;
