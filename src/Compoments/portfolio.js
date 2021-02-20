import React from "react";
import "./assets/css/portfolio.css";
import Ewd from './assets/img/ewdtech.png'

function portfolio() {
  return (
    <React.Fragment>
    

    <div class="row m-0 w-100">
      <div class="col-md-3 p-0"data-toggle="modal" data-target="#myModal">
        <div class="pnav">
          <a href="#"></a>
          </div> 
      </div>
    </div>
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
    
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the modal.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
    
      </div>
    </div>




    </React.Fragment>
  );
}

export default portfolio;
