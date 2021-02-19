import React from 'react'
import './assets/css/header.css'
import './assets/css/utility.css'
import Navlogo from './assets/img/logo-8.png'
import Computer from './assets/img/computer-8.png'
import Icons from './assets/img/icons.png'
import Chair from './assets/img/chair.png'
import Table from './assets/img/table.png'
import Artboard_4 from './assets/img/Artboard-4.png'

function header() {
    return (
        <React.Fragment>


<section className="">
<nav className="navbar navbar-expand-lg navbar-light bg-transparent main_padding pt-3 pb-3">
  <a className="navbar-brand" href="#"><img src={ Navlogo}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <a className="nav-item nav-link cl-006ff7 active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link cl-006ff7" href="#">Services</a>
      <a className="nav-item nav-link cl-006ff7" href="#">Portfolio</a>
      <a className="nav-item nav-link cl-006ff7" href="#">Blog</a>
      <a className="nav-item nav-link cl-006ff7" href="#">Contact</a>
      <a className="nav-item nav-link cl-006ff7" href="#">About Us</a>
    </div>
  </div>
</nav>
</section>
{/* <section id="particles-js">
    <div className="row">
        <div className="col-lg-5 col-md-5"></div>
        <div className="col-lg-7 col-md-7">        <div className=" imag-column ">


<img src={Computer} data-aos="fade-left" data-aos-delay="500" data-aos-duration="100"className="cumputer-image aos-init aos-animate"className="img-fluid"/>
<img src={Icons} data-aos="fade-left" data-aos-delay="500" data-aos-duration="100" />
<img src={Chair} data-aos="fade-left" data-aos-delay="500" data-aos-duration="100" />
<img src={Table} data-aos="fade-left" data-aos-delay="500" data-aos-duration="100" /> 

</div></div>



    </div>
 
        </section> */}
        <div class="card img-fluid text-center border-0"> <img class="card-img-top w-100 bg-linear-gradient" src={Artboard_4} alt="Card image"/>
        <div class="card-img-overlay cl-fff d-flex justify-content-center flex-column align-items-center father-day-banner-styling">
          <h4 class="card-title  font-weight-bold cl-white">
            Happy Fathers Day</h4>
          <p class="card-text cl-white mw-35">Make your Father's day more special with awesome T Shirt gift Idea.
            Get Ideas with EWD Father's day Apparel.</p>
        </div>
      </div>
   

          
        </React.Fragment>
    )
}

export default header
