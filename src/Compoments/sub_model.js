import React from 'react'
const sub_model=(props)=> {
    return (
        <React.Fragment>
  <div id="myModal" class="modal fade pl-5 pr-5" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <img src={props.one} class="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
  <div id="myModal" class="modal fade pl-5 pr-5" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <img src={props.two} class="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
  <div id="myModal" class="modal fade pl-5 pr-5" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <img src={props.three} class="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </div>


        </React.Fragment>
    )
}

export default sub_model
