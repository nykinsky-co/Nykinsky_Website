import React from 'react';
import '../Assets/styles/navbar.css'

function Navigation() {
    return (

        <div>
        <nav>
            <div className="wrapper">
                <div className="logo"><a href="#">Coding Circulate</a></div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        <a href="#">Services</a>
                        <div className="mega-box">
                            <div className="content">
                                <div className="main">
                                    <p>Graphic Design</p>
                                    <ul className="mega-links">
                                        <li><a href="#">Logo Design</a></li>
                                        <li><a href="#">Card Design</a></li>
                                        <li><a href="#">Template Design</a></li>
                                        <li><a href="#">Broushure Design</a></li>
                                    </ul>
                                </div>
                                <div className="main">
                                    <p>Web Design</p>
                                    <ul className="mega-links">
                                        <li><a href="#">HTML Website</a></li>
                                        <li><a href="#">Wordpress Website</a></li>
                                        <li><a href="#">Joomla Website</a></li>
                                        <li><a href="#">Education Website</a></li>
                                    </ul>
                                </div>
                                <div className="main">
                                    <p>Email Services</p>
                                    <ul className="mega-links">
                                        <li><a href="#">Personal Email</a></li>
                                        <li><a href="#">Business Email</a></li>
                                        <li><a href="#">Mobile Email</a></li>
                                        <li><a href="#">Web Marketing</a></li>
                                    </ul>
                                </div>
                                <div className="main">
                                    <img src="images/img.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
        </nav>


<section className="hero">
  <div className="hero-content">
    <h1>Welcome to Berger Hut</h1>
    <p>Experience the Taste of Perfection</p>
    <a href="#menu" className="btn">Explore Our Menu</a>
  </div>
</section>

<section className="about dark-theme">
  <div className="about-content">
    <h2>About Berger Hut</h2>
    <p>Experience the finest gourmet burgers in a cozy and rustic atmosphere. At Berger Hut, we are dedicated to delivering exceptional flavors that will tantalize your taste buds.</p>
    <p>Our chefs meticulously craft each burger using locally sourced ingredients and unique flavor combinations. From juicy beef patties to mouthwatering vegetarian options, there's something for everyone.</p>
    <a href="#menu" className="btn">Explore Our Menu</a>
  </div>
  <div className="about-image">
    <img src="about-image.jpg" alt="About Image" />
  </div>
</section>

<section className="menu">
  <h2>Our Menu</h2>
  <div className="menu-items">
    {/* Menu items go here */}
    <div className="menu-item">
      <img src="burger1.jpg" alt="Burger 1" />
      <h3>Classic Cheeseburger</h3>
      <p>A juicy beef patty topped with melted cheese, fresh lettuce, tomato, and our special sauce. Served with a side of crispy fries.</p>
    </div>
    <div className="menu-item">
      <img src="burger2.jpg" alt="Burger 2" />
      <h3>Veggie Delight</h3>
      <p>A delicious veggie patty made from a blend of fresh vegetables and spices. Topped with avocado, sprouts, and tangy mayo. Served with a side of sweet potato fries.</p>
    </div>
    <div className="menu-item">
      <img src="burger3.jpg" alt="Burger 3" />
      <h3>Spicy BBQ Burger</h3>
      <p>A fiery burger packed with flavor! Grilled chicken breast smothered in spicy BBQ sauce, topped with jalapenos, crispy onion rings, and chipotle mayo. Served with a side of coleslaw.</p>
    </div>
  </div>
</section>

<section className="reservations">
  <div className="reservation-form">
    <h2>Make a Reservation</h2>
    <form>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="tel" name="phone" placeholder="Phone Number" required />
      <input type="date" name="date" required />
      <input type="time" name="time" required />
      <textarea name="message" placeholder="Additional Message" rows="5" />
      <button type="submit">Submit</button>
    </form>
  </div>
</section>

<section className="testimonials">
  <h2>What Our Customers Say</h2>
  <div className="testimonial">
    <img src="customer1.jpg" alt="Customer 1" />
    <p>"The burgers at Berger Hut are simply amazing! The flavors are rich, and the ingredients are always fresh. It's my go-to place whenever I'm craving a delicious meal."</p>
    <h4>John Doe</h4>
  </div>
  <div className="testimonial">
    <img src="customer2.jpg" alt="Customer 2" />
    <p>"Berger Hut never disappoints! The quality of their burgers and the friendly service make it a top-notch dining experience. I highly recommend it to all burger lovers!"</p>
    <h4>Jane Smith</h4>
  </div>
</section>

<section className="gallery">
  <h2>Gallery</h2>
  <div className="image-grid">
    <div className="image-item">
      <img src="gallery1.jpg" alt="Image 1" />
    </div>
    <div className="image-item">
      <img src="gallery2.jpg" alt="Image 2" />
    </div>
    <div className="image-item">
      <img src="gallery3.jpg" alt="Image 3" />
    </div>
    <div className="image-item">
      <img src="gallery4.jpg" alt="Image 4" />
    </div>
  </div>
</section>

<section className="contact">
  <div className="contact-container">
    <h2>Contact Us</h2>
    <div className="contact-info">
      <div className="info-item">
        <i className="fas fa-map-marker-alt"></i>
        <p>123 Main Street, City, Country</p>
      </div>
      <div className="info-item">
        <i className="fas fa-phone-alt"></i>
        <p>+1 234 567 890</p>
      </div>
      <div className="info-item">
        <i className="fas fa-envelope"></i>
        <p>info@bergerhut.com</p>
      </div>
    </div>
    <form className="contact-form">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" rows="5" required />
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>












<div>
        <div className="left-aligned"  style={{textAlign:'center',paddingTop:'80px'}}>
      <h3 style={{textAlign:'center'}}><b>WHAT WE DO</b></h3>
      <p>Real transformation demands hard work, persistence, and the right tools for the job. 
        <br/>For over 14 years, we've redefined craftsmanship and shared our expertise to help our clients succeed.</p>
    </div>
        <div>
            
            <div id="formList">
                
                <div id="list">
                    <div className="item1">
                        
                        <div className="content">
                            <table width="100%" cellSpacing="0">
                                

                                <tr>
                                    <h4 style={{textAlign:'center', color:'red'}}>Services</h4>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Aritifical Intelligence(AI)</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Cloud Transformation</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Data Engineering</td>
                                </tr>

                                <tr>
                                    <td colSpan="2" className="nameGroup">Generative AI</td>
                                </tr>
                            </table>
                        </div>
                    </div>
               
                    <div className="item1">
                       {/* <img src={img4} alt="Chopper" className="avatar" /> */}
                        <div className="content">
                            <table width="100%" cellSpacing="0">
                                
                            <tr>
                                    <h4 style={{textAlign:'center', color:'red'}}>Industries</h4>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Retail</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Cpg</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Bfs</td>
                                </tr>

                                <tr>
                                    <td colSpan="2" className="nameGroup">Manufacturing</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        {/* <img src={img4} alt="Chopper" className="avatar" /> */}
                        <div className="content">
                            <table width="100%" cellSpacing="0">
                                
                                      
                            <tr>
                                    <h4 style={{textAlign:'center', color:'red'}}>Consulting</h4>
                                </tr>

                                <tr>
                                    <td colSpan="2" className="nameGroup">Experience Consulting</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Application Engineering</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">Business Intelligence</td>
                                </tr>

                            </table>
                        </div>
                    </div>
                    <div className="item1">
                        {/* <img src={img4} alt="Chopper" className="avatar" /> */}
                        <div className="content">
                            <table width="100%" cellSpacing="0">

                            <tr>
                                    <h4 style={{textAlign:'center', color:'red'}}>Differentiate with AI/ML  </h4>
                                </tr>

                                <tr>
                                    <td colSpan="2" className="nameGroup">Data Science</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">AI Engineering</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="nameGroup">ML Products & Platforms</td>
                                </tr>
                                
                                
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        
          
        </div>
        </div>



        </div>






    );
}

export default Navigation;
