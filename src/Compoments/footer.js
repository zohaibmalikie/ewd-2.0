import React from "react";
import "./assets/css/footer.css";
function footer() {
  return (
    <React.Fragment>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 p-0">
                {/* <!--Column1--> */}
                <div className="footerLogo">
                <div className="opacity text-justify">
                  EWD Tech is a privately-owned Company based in Faisalabad, the
                  industrial Hub of Pakistan. We provide IT Consultancy,
                  Corporate-level Tech Support, Software Designs and
                  Development, Web Application Solutions. E-commerce Store to
                  complete business set-up along with visual identity and
                  representation of Brands and complete Product services and
                  maintenance solutions.
                </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {/* <!--Column1--> */}
                <div className="footer-pad text-justify">
                  EWD Tech is a privately-owned Company based in Faisalabad, the
                  industrial Hub of Pakistan. We provide IT Consultancy,
                  Corporate-level Tech Support, Software Designs and
                  Development, Web Application Solutions. E-commerce Store to
                  complete business set-up along with visual identity and
                  representation of Brands and complete Product services and
                  maintenance solutions.
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {/* <!--Column1--> */}
                <div className="footer-pad">
                  <h4>Heading 3</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Parks and Recreation</a>
                    </li>
                    <li>
                      <a href="#">Public Works</a>
                    </li>
                    <li>
                      <a href="#">Police Department</a>
                    </li>
                    <li>
                      <a href="#">Fire</a>
                    </li>
                    <li>
                      <a href="#">Mayor and City Council</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
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
