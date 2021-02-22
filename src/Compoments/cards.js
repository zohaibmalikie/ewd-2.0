import React from "react";
import "./assets/css/card.css";
import firstImg from "./assets/img/shopping.png";
import secondImg from "./assets/img/webdesign.png";
import thirdImg from "./assets/img/designservices.png";
import arrow from "./assets/img/arrow.png";
import CardsTwo from "../Compoments/cardstwo";
import Cardsthree from "../Compoments/cardsthree";
function cards() {
  return (
    <>
      <section className="main_padding mt-5">
        <div className="row m-0">
          <div className="col-lg-4 col-md-4 col-sm-12  ">
            <div className="d-flex flex-column justify-content-centerjustify-center align-items-center box_shadow  pt-4 pb-4">
              <img src={firstImg} />
              <section className="h-150 d-flex flex-column justify-content-centerjustify-center align-items-center ">
                <h4 className="pt-4 m-0">E-Commerce Solutions</h4>
                <div className="pt-4 text-center pl-2 pr-2 cl-8585858">
                  We provide extensive E-commerce solution along with 24/7 help
                  and support in any regard.
                </div>
                <div className="pt-5">
                  <button
                    type="button"
                    class="btn btn-light bg-269da1 cl-ffffff button_1 d-flex  justify-content-center justify-center align-items-center "
                  >
                    <img src={arrow} />
                    &nbsp;&nbsp;Read More
                  </button>
                </div>
              </section>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column justify-content-centerjustify-center align-items-center ">
            <div className="d-flex flex-column justify-content-centerjustify-center align-items-center box_shadow  pt-4 pb-4">
              <img src={secondImg} />
              <section className="h-150 d-flex flex-column justify-content-centerjustify-center align-items-center ">
                <h4 className="pt-4 m-0">Web Application</h4>
                <div className="pt-4 text-center pl-2 pr-2 cl-8585858">
                  We have a dedicated and hardworking team of web designers to
                  help our valued customers in any way they want.
                </div>
                <div className="pt-5">
                  <button
                    type="button"
                    class="btn btn-light bg-269da1 cl-ffffff button_1 d-flex  justify-content-center justify-center align-items-center "
                  >
                    <img src={arrow} />
                    &nbsp;&nbsp;Read More
                  </button>
                </div>
              </section>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column justify-content-centerjustify-center align-items-center ">
            <div className="d-flex flex-column justify-content-centerjustify-center align-items-center box_shadow  pt-4 pb-4">
              <img src={thirdImg} />
              <section className="h-150 d-flex flex-column justify-content-centerjustify-center align-items-center ">
                <h4 className="pt-4 m-0">Design Service</h4>
                <div className="pt-4 text-center pl-2 pr-2 cl-8585858">
                  Our graphic designing team is expert in making Creative and
                  User Experience-based Design that gives visual representation
                  to your brand.
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    class="btn btn-light bg-269da1 cl-ffffff button_1 d-flex  justify-content-center justify-center align-items-center "
                  >
                    <img src={arrow} />
                    &nbsp;&nbsp;Read More
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <CardsTwo />
      <Cardsthree />
    </>
  );
}

export default cards;
