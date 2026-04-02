import React from 'react'
import x from '../x.png'
import insta from '../insta.png'
import fb from '../fb.png'
const Footer = () => {
  return (
      <footer id="footer">
      <div id="footer-container" className='row bg-dark text-center p-4'>

        {/* About Us */}
        <div className="footer-section col-md-4 text-light" id="footer-about">
          <h4>About Us</h4>
          <p>
         SPORTSHUB is your ultimate destination for premium sports gear and equipment. Our mission is to elevate your game, whether you are a professional or just starting out, by offering exceptional service, expert guidance, and gear you can trust. We are passionate about supporting athletes at every level, providing innovative products, reliable performance, and a seamless shopping experience. Our goal is to build a strong community that inspires dedication, confidence, and continuous improvement in every sporting journey.
          </p>
        </div>

        {/* Contact Us */}
        <div className="footer-section col-md-4 text-light" id="footer-contact">
          <h4>Contact Us</h4>
           <form>
                  <input type="email" placeholder="Enter your email" class="form-control"/> <br />
                  <textarea cols="7" rows="7" placeholder="Leave a comment" class="form-control"></textarea> <br />
                  <input type="submit" value="Send message" class="btn btn-danger"/>
            </form>
        </div>

        {/* Connect With Us */}
        <div className="footer-section col-md-4 text-light" id="footer-social">
          <h4>Connect With Us</h4>
           <p className="footer-social-text">
          Follow us on social media for updates, new arrivals, and exclusive offers.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="" />
            <p>facebook</p>
            </a> 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="" />
            <p>x</p>
            </a> 
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="" />
            <p>instagram</p>
            </a>            
          </div>
        </div> <br />

      </div> <br />

      <div id="footer-bottom">
        <p>Griffo's SportsHub © 2026. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
