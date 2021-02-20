import React from "react";
import "./assets/css/footer.css";
import Ewd from './assets/img/ewdtech.png'

function footer() {
  return (
    <React.Fragment>
      <footer className="mainfooter main_padding " role="contentinfo">
        {/* <div className="text-center"><span className="font-weight-bold f-30">Get </span><span className=" f-30"> In </span> <span  className="font-weight-bold f-30">Touch</span></div>
        <p className="cl-999  text-center pl-5 pr-5">We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p> */}
        <section className="">
        <div className="f-30 text-center font-weight-bold">Contact Us</div>
      <div className="row">
         
        <div className="col-lg-5 col-md-5 col-sm-5">
       
          <div className="w-100">
            <div className="pt-4"><span><i className="fa fa-envelope" aria-hidden="true"></i></span>&nbsp;<span className="f-14 cl-999"> support@ewdtech.com</span></div>
            <div className="pt-4"><span><i className="fa fa-phone" aria-hidden="true"></i></span>&nbsp;<span className="f-14 cl-999"> +92 333 2793279</span></div>
            <div className="pt-4"><span><i className="fa fa-skype" aria-hidden="true"></i></span>&nbsp;<span className="f-14 cl-999">  maqsood890
</span></div>
            <div className="pt-4"><span><i className="fa fa-map-marker" aria-hidden="true"></i></span>&nbsp;<span className="f-14 cl-999"> 5th floor, mezan executive tower, Faisalabad</span></div>
          
          </div>




        </div>
        <div className="col-lg-7 col-md-7 col-sm-7">
      
          <div className="d-flex w-100 justify-content-between pt-3">
          <div className="w-48 ">    <input type="text" className="form-control bg-e8f0fe border-0" id="inlineFormInputName " placeholder="Name"/></div>
          <div className="w-48"><input type="text" className="form-control bg-e8f0fe border-0" id="inlineFormInputEmail" placeholder="Email"/></div>
  
          </div>
          <div className="w-100 pt-3"><input type="email" className="form-control bg-light border-0 bg-e8f0fe" id="inlineFormInputEmail " placeholder="Email"/></div>
          <div><div class="form-group pt-3">
                  <textarea id="form_message" name="message" placeholder="Message" rows="4" required="" className="footer_textarea"></textarea>
                </div></div>
                <div className="text-center"><button type="button" onclick="sendMessage(this.form.id);" class="butn butn-bg disabled"><span>Send Message</span></button></div>




        </div>


      </div>

        </section>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
      </footer>
      <footer class="text-center pos-r bg-dark main_padding">
  <div class="container pt-3 pb-3"> 

    {/* <a class="logo" href="#"> <img src="img/logo-light.png" alt="logo"/> </a> */}
    <div class="social"> 
      <a  href="https://www.linkedin.com/company/vistabit-technologies"><i class="wgl-icon fa fa-twitter f-30"></i></a>
      <a className="pl-4" href="https://www.facebook.com/vistabit"><i class="wgl-icon fa fa-facebook f-30"></i></a>
      <a className="pl-4" href="https://www.facebook.com/vistabit"><i class="wgl-icon  fa fa-linkedin f-30"></i></a>
      <a className="pl-4" href="https://www.facebook.com/vistabit"><i class="wgl-icon  fa fa-instagram f-30"></i></a>



    </div>
    <p>Copy Right © EWDTECH All Right Reserved</p>
  </div>
  <div className="curve curve-top curve-center"></div>
</footer>
    </React.Fragment>
  );
}

export default footer;
