// BusinessCard.js
import React, { useEffect , useState } from 'react';
import './BusinessCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faMobileAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import Loader from './Loader';
import PageBackground from './PageBackground';

function BusinessCard() {

  const [data, setData] = useState([]);
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8020/data",
      responseType: "json",
    }).then(function (response) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setData(response.data);
      // setIsLoading(false);
    });
  }, []);
  return (
    <>
      {
        isLoading ? <Loader /> : 
        data.map((currEle) =>{
          return(
            <>
              <div className="container">
      <img
        src="https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/logo_name_black_v.png"
        alt="Logo"
        className="logo"
      />

<div className="pg_background" style={{ backgroundImage: "url('https://cdn0070.qrcodechimp.com/assets/images/fb_cover.svg?v=1704450169d')" }}></div>

      <div className="business-card">
        <div className="qrc_profile_inner">
          <div
            className="qrc_profilepic"
            style={{
              backgroundImage:
                "url('https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/1598683042998_m.jpeg')",
            }}
          ></div>
          <div className="qrc_profile_inner_info">
            <h2>{currEle.name}</h2>
            <p>STACKLAB.IN</p>
            <p><strong>Co-Founder</strong></p>
          </div>
        </div>


        <div className="pg_background" style={{ backgroundImage: "url('https://cdn0070.qrcodechimp.com/assets/images/fb_cover.svg?v=1704450169d')" }}></div>

        
        <div className="social-media">
          <a href="tel:9172316178">
            <FontAwesomeIcon icon={faPhone} className="icon-smartphone" />
          </a>
          <a href="mailto:suyash@example.com">
            <FontAwesomeIcon icon={faEnvelope} className="icon-email" />
          </a>
          <a href="https://wa.me/9172316178">
            <FontAwesomeIcon icon={faWhatsapp} className="icon-whatsapp" />
          </a>
          <a href="https://example.com/location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-location" />
          </a>
        </div>

        <div className="about">
          <h3>About Me</h3>
          <p>Hi, <span>{currEle.name}</span> this side,</p>
          <p>{currEle.aboutus}.</p>
        </div>

        <div className="contact" style={{ fontFamily: 'Arial, sans-serif', display: 'flex',  alignItems: 'center' }}>
          <FontAwesomeIcon icon={faMobileAlt} style={{ fontSize: '24px', color: '#666',  backgroundColor: '#f8f8f8', marginRight: '10px',marginTop: '-360px',border:'2px solid',borderRadius:'90%',padding:'10px' }} />
          <hr />
          
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '26px', marginTop: '5px', marginLeft: '25px', fontWeight: 'bold', color: '#333' }}>Contact Us</h2>
            
            <p style={{ fontSize: '20px', color: '#666', position: 'relative', fontWeight: 'bold', right: '70px' }}>
              Call Us: <br /> {currEle.mobile}
            </p>
            <p style={{ fontSize: '20px', color: '#666', position: 'relative', fontWeight: 'bold', right: '70px' }}>Email: <br /> {currEle.email}</p>
            <p style={{ fontSize: '20px', color: '#666', position: 'relative', fontWeight: 'bold', right: '70px' }}>Address: <br />{currEle.address}</p>
            <a
  href="https://www.google.com/maps/place/Stacklab.in/@18.6089836,73.7700223,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bb139f7d3f81:0xf990a3b9c6d80922!8m2!3d18.6089836!4d73.7700223!16s%2Fg%2F11jpj1b3bp?entry=ttu"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: 'none' }} // Optional: To remove underline from the link
>
  <button
    className="direction-button"
    style={{
      fontSize: '20px',
      fontWeight: 'bold',
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '15px 16px',
      borderRadius: '40px',
      border: 'none'
    }}
  >
    Direction
  </button>
</a>

          </div>
        </div>

        <div className="section qrc_gallery qr_cc_card" >
          <div className="qrc_heading" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: 'black', fontSize: '24px', position: 'relative', bottom: '-22px' }}>Fun At STACKLAB</h2>
            <p style={{ fontSize: '20px', color: '#666', lineHeight: '1.5', position: 'relative', bottom: '-22px' }}>We understand the importance of work-life balance. We try to create an atmosphere that no one wants to leave.</p>
            <div className="qrc_gallery_wrapper">
              <ul className="qrc_gallery_grid_1">
                <li>
                  <a rel="nofollow noopener noreferrer" href="https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/media_3.jpeg" data-lightbox="images-gallery">
                    <img className="img-fluid" src="https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/media_3.jpeg" alt="Fun Image 3" style={{ width: '100%', maxWidth: '650px', marginRight: '170px', padding: '0px' }} />
                  </a>
                </li>
                <li>
                  <a rel="nofollow noopener noreferrer" href="https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/media.jpeg" data-lightbox="images-gallery">
                    <img className="img-fluid" src="https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/media.jpeg" alt="Fun Image"/>
                  </a>
                </li>
                <li>
                  <a rel="nofollow noopener noreferrer" href="https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/media_2.jpeg" data-lightbox="images-gallery">
                    <img className="img-fluid" src="https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/media_2.jpeg" alt="Fun Image 2" />
                  </a>
                </li>
                <li>
                  <a rel="nofollow noopener noreferrer" href="https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/media_1.jpeg" data-lightbox="images-gallery">
                    <img className="img-fluid" src="https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/media_1.jpeg" alt="Fun Image 1" style={{ width: '100%', height: '300px', maxWidth: '650px', marginRight: '170px' }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="find-me">
          <h2 style={{ color: 'black', fontSize: '24px', position: 'relative', bottom: '-22px' }}>Find Me Here</h2>
          <br />
          <hr />
          <a href="https://linkedin.com" className="qrc_social_text_headings">LinkedIn
          <span className="icon-right_arrow"></span>
          <div
            className="qrc_social_icon1"
            style={{
              backgroundImage: "url('https://www.qrcodechimp.com/images/digitalCard/linkedin_icon@72x.png')",
              width: '50px',
              height: '50px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginTop: '10px'
            }}
          ></div>
          </a>
        </div>

        <div className="find-me">
          <a rel="nofollow noopener noreferrer social_link_a" 
            href="https://www.instagram.com/webbed_dev/" target="_blank">
            <div className="qrc_social_icon" 
              style={{backgroundImage:"url('https://www.qrcodechimp.com/images/digitalCard/insta_icon@72x.png')"}}>
            </div>
            <div className="qrc_social_text">
              <div className="qrc_social_text_heading">Instagram</div>
            </div>
            <div className="qrc_social_action">
              <span className="icon-right_arrow1"></span>
            </div>
          </a>
        </div>

        <div className="links">
          <h1 style={{ color: 'black', fontSize: '24px', position: 'relative', bottom: '-22px' }}>Links</h1>
          <h3 style={{ fontSize: '19px', position: 'relative', bottom: '-12px' }}>Find As Here</h3>
          <hr />
          <br />
          <h2 style={{ color: 'black', fontSize: '24px', position: 'relative', bottom: '-px', right: '20px' }}>
            <a href="https://stacklab.in/classes.html">Company Website</a>
          </h2>
          <a href="https://stacklab.in/classes.html" target="_blank" rel="noopener noreferrer">
          <span className="icon-right_arrow2"></span>
          </a>
          <a href="https://stacklab.in/classes.html" target="_blank" rel="noopener noreferrer">
  <div
    className="qrc_social_icon2"
    style={{ backgroundImage: "url('https://www.qrcodechimp.com/images/digitalCard/weblink.png')" }}
  ></div>
</a>
        </div>
        

        <div className="links-special">
          <a href="https://www.qrcodechimp.com/" className="special-link1">
            <div>
              <img src="https://www.qrcodechimp.com/assets/images/qrChimpIconRound.png?v=1715335332b" alt="QR Chimp Icon" />
            </div>
            Get your own page for free!
          </a>
        </div>

        <div className="add-to-contact">
          <Link to="" className="qrc_addtocontact">
            <div className="qrc_addtocontact_text">Add to Contact</div>
            <div className="qrc_addtocontact_circle">
              <span className="icon-add_1"></span>
            </div>                
          </Link>
        </div>
        
        <div className="add-to-contact1">
          <Link to="/profile" className="qrc_addtocontact">
            <div className="qrc_addtocontact_circle1"></div>   
          </Link>
        </div>
        
        <div className="add-to-contact2">
          <Link to="" className="qrc_addtocontact">
            <div className="qrc_addtocontact_circle1"></div>   
          </Link>
        </div>
      </div>
    </div>
            </>
          )
        })
      }
    </>
  );
}

export default BusinessCard;
