import React from 'react'

function sub_portfolio(props) {
    return (
       <React.Fragment>
<div class="col-md-4 pr-3 pl-0" data-toggle="modal" data-target="#myModal" >
          <div class="boxShadow_portfolio ">
            <div class="pnav">
              <a href="#" className={props.cl}>
                {/* <div className="img_one"></div> */}
              </a>
            </div>
            <div class="text-center border">
              <div class="bottom_card_text">{props.heading}</div>
            </div>
          </div>
        </div>



       </React.Fragment>
    )
}

export default sub_portfolio
