import React, { useEffect, useState, useCallback } from 'react';
import '../Assets/styles/carousel.css'; // Import CSS for the slider styles




import slider2 from '../Assets/images/slider_1.jpg';

import slider1 from '../Assets/images/slider_2.jpg';
import slider3 from '../Assets/images/slider_3.jpg';




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
                <div className="item">
                    <img src={slider1} alt="Slider" />
                    {/*<div className="content">
                        <p>design</p>
                        <h2>Slider 01</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                        </p>
    </div>*/}
                </div>
                <div className="item">
                    <img src={slider3} alt="Slider " />
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
            
            {/* button arrows 
            <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
                
            </div>*/}
            <div className="processing-line1" id="processing-line-1"></div> {/* Processing line */}
        </div>
        

     {/* wht we do section*/}
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
};

export default Slider;
