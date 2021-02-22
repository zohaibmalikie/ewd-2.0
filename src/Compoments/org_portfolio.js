import React from "react";
import Sub_portfolio from "./sub_portfolio";
import Sub_model from "./sub_model";
import "./assets/css/portfolio.css";
import img_1 from "./assets/img/web_1.jpg";
import img_2 from "./assets/img/tpmockup.jpg";
import img_3 from "./assets/img/three.png";

function org_portfolio() {

  return (
    <React.Fragment>
      <div class="row m-0 w-100 main_padding pt-5">
        <Sub_portfolio cl="img_one" heading="Zohaib" />
        <Sub_model one={img_1} />
        <Sub_portfolio cl="img_two" heading="asad" />
        <Sub_model two={img_2} />
        <Sub_portfolio cl="img_three" heading="Mubashir" />
        <Sub_model three={img_3} />
      </div>
      <div class="row m-0 w-100 main_padding pt-5">
        <Sub_portfolio cl="img_one" heading="tauqeer" />
        <Sub_model one={img_1} />
        <Sub_portfolio cl="img_two" heading="Zain" />
        <Sub_model one={img_2} />
        <Sub_portfolio cl="img_three" heading="Faizan" />
        <Sub_model one={img_3} />
      </div>
      <div class="row m-0 w-100 main_padding pt-5">
        <Sub_portfolio cl="img_one" heading="Salman" />
        <Sub_model one={img_1} />
        <Sub_portfolio cl="img_two" heading="Shakeeb" />
        <Sub_model one={img_2} />
        <Sub_portfolio cl="img_three" heading="Adeel" />
        <Sub_model one={img_3} />
      </div>
    </React.Fragment>
  );
}

export default org_portfolio;




