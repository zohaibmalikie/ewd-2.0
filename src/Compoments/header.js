import React from "react";
import "./assets/css/header.css";
import "./assets/css/utility.css";
import Navlogo from "./assets/img/logo-8.png";
import Computer from "./assets/img/computer-8.png";
import Icons from "./assets/img/icons.png";
import Chair from "./assets/img/chair.png";
import Table from "./assets/img/table.png";
import main from "./assets/img/main.png";

function header() {
  return (
    <React.Fragment>
      <section className="gradient">
        <nav
          className="nav-scroll navbar navbar-expand-lg navbar-light bg-light main_padding pt-1 pb-1 sticky-top"
          id="header"
        >
          <a className="navbar-brand" href="#">
            <img src={Navlogo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link cl-fff active" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link cl-fff" href="#">
                Services
              </a>
              <a className="nav-item nav-link cl-fff" href="#">
                Portfolio
              </a>
              <a className="nav-item nav-link cl-fff" href="#">
                Blog
              </a>
              <a className="nav-item nav-link cl-fff" href="#">
                Contact
              </a>
              <a className="nav-item nav-link cl-fff" href="#">
                About Us
              </a>
            </div>
          </div>
        </nav>
        <img
          className="card-img-top w-100 bg-linear-gradient pt-5"
          src={main}
          alt="Card"
          id="bg-img"
        />
      </section>
    </React.Fragment>
  );
}

export default header;
