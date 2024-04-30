
import "../../Css/Footer.css"
import fb from "../../assets/fb.svg"
import Instagram from '../../assets/Instagram.svg'
import twitter from '../../assets/twitter.svg'
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-section">

        <div className="footer-links">
          <div className="footer-links-div">
            <h4>Useful Links</h4>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/about">About</Link>
                            
          </div>

          <div className="footer-links-div">
            <h4>Contact Us</h4>
            <p>Email:EventFinder@gmail.com</p>  
            <p>Phone Number:07721810275</p>          
          </div>

          <div className="footer-links-div">
            <h4>Follow Us</h4>
            <div className="social-media">
              <p><img src={fb} alt="" /></p>
              <p><img src={Instagram} alt="" /></p>
              <p><img src={twitter} alt="" /></p>  
            </div>             
          </div>  
        </div>
        <hr></hr>

        <div className="footer-copy-section">
          <div className="copyright">
            <p>©2024 EventFinder. All right reserved.</p>
          </div>
          <div className="privacy">
            <a href="/privacy"><div><p>Privacy</p></div></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
