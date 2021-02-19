import React from "react";
import "./assets/css/footer.css";
import Ewd from './assets/img/ewdtech.png'

function footer() {
  return (
    <React.Fragment>
      <footer className="mainfooter main_padding" role="contentinfo">
        <div className="footer-middle">
          <div className="container-1">
            <div className="row justify-content-between w-100">
              <div className="col-md-4 p-0">
                {/* <!--Column1--> */}
                <div className="footerLogo">
                <img src={Ewd}/>
                </div>
                <div className="opacity text-justify">
                EWD Tech is a privately-owned Company based in Faisalabad, the industrial Hub of Pakistan. We provide IT Consultancy, Corporate-level Tech Support, Software Designs and Development, Web Application Solutions.
                </div>
                <div className="">
                {/* <!--Column1--> */}
                <div className="footer-pad text-justify">
                E-commerce Store to complete business set-up along with visual identity and representation of Brands and complete Product services and maintenance solutions.
                </div>
              </div>
              </div>
         
              <div className="">
                {/* <!--Column1--> */}
                <div className="footer-pad">
                  <h4>QUICK LINKS</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">WEB DEVLOPMENT</a>
                    </li>
                    <li>
                      <a href="#">SERVICES</a>
                    </li>
                    <li>
                      <a href="#">PORTFOLIO</a>
                    </li>
                    <li>
                      <a href="#">ABOUT Us</a>
                    </li>
                    <li>
                      <a href="#">HOME</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                    <div>  <span> <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                    <i class="fa fa-envelope "></i>
                    </a>
                  </li></span>
                  <span> support@ewdtech.com</span></div>
              <div>  <span>  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                    <i class="fa fa-phone "></i>
                    </a>
                  </li></span><span>+92 333 2793279</span></div>
                <div> <span>  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                    <i class="fa fa-skype "></i>
                    </a>
                         
                  </li> </span>   <span> maqsood890</span></div>
                  <div>        <span>    <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                    <i class="fa fa-map-marker"></i>
                    </a>
                  </li></span>
                  <span> 5th floor, mezan executive tower, Faisalabad</span></div>
                </ul>
                
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  &copy; Copyright 2018 - Company Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default footer;
