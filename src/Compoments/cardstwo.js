import React from "react";
import '../Compoments/assets/css/cardtwo.css';
import firstImg from './assets/img/bulb.png'
import secondImg from './assets/img/design.png'
import thirdImg from './assets/img/designservices.png'
import arrow from './assets/img/arrow.png'
import CardsThree from "../Compoments/cardsthree";


function cardstwo() {
  return (
 
 <section className="bg-2 main_padding  d-flex justify-content-center flex-column align-items-center mt-5 cl-ffffff">
   <div className="text-center">
     <div className="bg_title pb-2"><span>Our</span><span className="font-weight-bold">Process</span></div>
  
   </div>
   <div className="mw-p pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna.</div>
  <div className="row m-0">
    <div className="col-lg-3 col-md-3 col-sm-12">
    <div className="d-flex flex-column justify-content-centerjustify-center align-items-center   pt-4 pb-4">
   <img src={firstImg}/>
        <section className=" d-flex flex-column justify-content-centerjustify-center align-items-center ">
        <h4 className="pt-4 m-0">Discover</h4>
          <div className="pt-4 text-center ">
          We offer research-based ideas 
and solutions for your 
digital problems.
</div>

        </section>
   </div>


    </div>
    <div className="col-lg-3 col-md-3 col-sm-12">
    <div className="d-flex flex-column justify-content-centerjustify-center align-items-center   pt-4 pb-4">
   <img src={firstImg}/>
        <section className=" d-flex flex-column justify-content-centerjustify-center align-items-center ">
        <h4 className="pt-4 m-0">Discover</h4>
          <div className="pt-4 text-center ">
          We offer research-based ideas 
and solutions for your 
digital problems.
</div>

        </section>
        <div></div>
   </div>


    </div>
    <div className="col-lg-3 col-md-3 col-sm-12">
    <div className="d-flex flex-column justify-content-centerjustify-center align-items-center   pt-4 pb-4">
   <img src={firstImg}/>
        <section className=" d-flex flex-column justify-content-centerjustify-center align-items-center ">
        <h4 className="pt-4 m-0">Discover</h4>
          <div className="pt-4 text-center ">
          We offer research-based ideas 
and solutions for your 
digital problems.
</div>

        </section>
   </div>


    </div>
    <div className="col-lg-3 col-md-3 col-sm-12">
    <div className="d-flex flex-column justify-content-centerjustify-center align-items-center   pt-4 pb-4">
   <img src={firstImg}/>
        <section className=" d-flex flex-column justify-content-centerjustify-center align-items-center ">
        <h4 className="pt-4 m-0">Discover</h4>
          <div className="pt-4 text-center ">
          We offer research-based ideas 
and solutions for your 
digital problems.
</div>

        </section>
   </div>


    </div>
  </div>
  </section>

 
  );
}

export default cardstwo;
