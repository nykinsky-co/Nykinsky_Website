import React, { useEffect, useState, useCallback } from 'react';
import '../Assets/styles/carousel.css'; // Import CSS for the slider styles




import slider2 from '../Assets/images/slider_1.jpg';

import slider1 from '../Assets/images/slider_2.jpg';
import slider3 from '../Assets/images/slider_3.jpg';

import company from '../Assets/videos/company.jpg';

import imgHeaderIndustries from '../Assets/images/industries-logistics.jpg';




const Slider = () => {
    const [items, setItems] = useState([]);
    const [countItem, setCountItem] = useState(0);
    const [itemActive, setItemActive] = useState(0);

    useEffect(() => {
        const itemList = document.querySelectorAll('.slider .list .item');
        setItems(itemList);
        setCountItem(itemList.length);
    }, []);

    const showSlider = useCallback(() => {
        items.forEach((item, index) => {
            if (index === itemActive) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }, [itemActive, items]);

    useEffect(() => {
        const interval = setInterval(() => {
            setItemActive(prevActive => (prevActive + 1) % countItem);
        }, 8000);

        return () => clearInterval(interval);
    }, [countItem]);

    useEffect(() => {
        showSlider();
    }, [showSlider]);

    return (
        <div>
        <div className="slider">
            {/* list Items */}
            <div className="list">
                {/* Slider items */}
                <div className="item active">
                    <img src={company} alt="Slider" />
                    {/*<div className="content">
                        <p>design</p>
                        <h2>Slider 01</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                        </p>
    </div>*/}
                </div>
              {/*  <div className="item">
                    <img src={slider1} alt="Slider" />
                    <div className="content">
                        <p>design</p>
                        <h2>Slider 01</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                        </p>
    </div>
                </div>*/}

               {/* <div className="item">
                    <img src={slider3} alt="Slider " />
                    <div className="content">
                        <p>design</p>
                        <h2>Slider 01</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                        </p>
    </div>
                </div>*/}
                
               
            </div>
            
            {/* button arrows 
            <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
                
            </div>*/}
            <div className="processing-line1" id="processing-line-1"></div> {/* Processing line */}
        </div>


    

        <section className="about dark-theme" style={{margin:'auto', textAlign:'justify'}}>
  <div className="about-content"  >
    <h2>About NyKinSky & Company</h2>
   <p>At NyKinSky, we are driven by the conviction that with the right blend of expertise and collaborative teamwork, we can tackle a wide array of issues encompassing Business, Social Dynamics, Policy, and Digital Transformation. </p>
    <p>Each member of our diverse team brings unique insights and specialized knowledge to the table, enabling us to craft innovative solutions and make a tangible impact wherever we engage.</p>
   
  </div>
  
  <div className="about-image">
    {/*<img src={slider2} alt="About Image" />*/}
  </div>
</section>
        

     {/* wht we do section*/}
     
     <section className="menu">
  <h2>WHAT WE DO</h2>
  <h5 style={{color:'white'}}>Real transformation demands hard work, persistence, and the right tools for the job. 
    For over 14 years, we've redefined craftsmanship and shared our expertise to help our clients succeed.</h5>

  <div className="menu-items" style={{paddingTop:'40px'}}>
    {/* Menu items go here */}
    <div className="menu-item">
      <img src={imgHeaderIndustries} alt="Burger 1" />
      <h3>Services & Consulting</h3>
      <div style={{paddingTop:'10px'}}></div>
      <p>Aritifical Intelligence(AI)</p>
      <p>Cloud Transformation</p>
      <p>Data Engineering</p>
      <p>Generative AI</p>

    </div>
    <div className="menu-item">
      <img src={imgHeaderIndustries} alt="Burger 2" />
      <h3>Industries & Differentiate with AI/ML</h3>
      <div style={{paddingTop:'10px'}}></div>
      <p>Retail</p>
      <p>Cpg</p>
      <p>Bfs</p>
      <p>Manufacturing</p>
    </div>

   
  </div>
</section>
    

        
      </div> 
       
    );
};

export default Slider;
