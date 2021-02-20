import React from "react";
import "./assets/css/card.css";
import firstImg from './assets/img/E-COMMERCE_SOLUTION.png'
import secondImg from './assets/img/WEB_APPLICATION.png'
import thirdImg from './assets/img/DESIGN_SERVICES.png'

function cards() {
  return (
    <div className="main_padding">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid p-4 w-100 h-100"
                src={firstImg}
              />
            </div>
            <div className="team-content">
              <h3 className="name">E-Commerce Solutions</h3>
            </div>
            <ul className="social">
              <li>
                <a>
                We provide extensive E commerce solution along with 24/7 help and support in any regard
                </a>
              </li>
              {/* <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-twitter"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-google-plus"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-linkedin"
                  aria-hidden="true"
                ></a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid p-4"
                src={secondImg}
              />
            </div>
            <div className="team-content">
              <h3 className="name">Justin Ramos</h3>
              <h4 className="title">Web Developer</h4>
            </div>
            <ul className="social">
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-facebook"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-twitter"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-google-plus"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-linkedin"
                  aria-hidden="true"
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid p-4"
                src={thirdImg}
              />
            </div>
            <div className="team-content">
              <h3 className="name">Mary Huntley</h3>
              <h4 className="title">Web Developer</h4>
            </div>
            <ul className="social">
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-facebook"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-twitter"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-google-plus"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-linkedin"
                  aria-hidden="true"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cards;
