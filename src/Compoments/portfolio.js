import React from "react";
import "./assets/css/portfolio.css";
import img_1 from "./assets/img/web_1.jpg";

function portfolio(props) {
  return (
    <React.Fragment>
      <div className="row m-0 w-100">
        <div
          className="col-md-3 p-0"
          data-toggle="modal"
          data-target="#myModal"
        >
          <div className="boxShadow_portfolio ">
            <div className="pnav">
              <a href="#"></a>
            </div>
            <div className="text-center border">
              {" "}
              <div className="bottom_card_text">My Athena Bar</div>
            </div>
          </div>
        </div>
      </div>
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close text-right" data-dismiss="modal">
                &times;
              </button>
              <img
                src={img_1}
                className="img-fluid w-100"
                alt=""
              /> 
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default portfolio;
