import React from "react";
import "./assets/css/card.css";
import firstImg from './assets/img/E-COMMERCE_SOLUTION.png'
import secondImg from './assets/img/WEB_APPLICATION.png'
import thirdImg from './assets/img/DESIGN_SERVICES.png'

function cards() {
  return (
 <section className="main_padding">
   <div className="row">

     <div className="col-lg-4 col-md-4"><div class=" card" >
                    <div className="card-head circle-inner" id="card-header"></div>
                    <div className="card-body mt-1">
                        <div className="circle aos-init aos-animate">
                            <img src={firstImg} className="img-fluid" id="solution"/>

                        </div>

                    </div>
                    <div className=" card-footer h-180">
                        <h3 className="heading-card"> E-Commerce Solutions </h3>
                        <p className="three-card-only">We provide extensive E commerce solution along with 24/7 help and
                            support in any regard </p>
                    </div>




                </div></div>
     <div className="col-lg-4 col-md-4"></div>
     <div className="col-lg-4 col-md-4"></div>
   </div>


 </section>
  );
}

export default cards;
