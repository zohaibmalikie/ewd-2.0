import React from "react";
import "../assets/css/portfolio.css";
// import img_1 from "./assets/img/web_1.jpg";

function singleModel({ data }) {
  // const filterImg = item.filter()
  return (
  
      // <div id="myModal" className="modal fade p-5" role="dialog">
      //   <div className="modal-dialog">
      //     <div className="modal-content">
      //       <div className="modal-header">
      //         <button type="button" className="close" data-dismiss="modal">
      //           &times;
      //         </button>
      //         <div className={data && data.cl}></div>
      //         {/* <img
      //           src={data && data.img}
      //           className="img-fluid w-100"
      //           alt=""
      //         />  */}
      //       </div>
      //     </div>
      //   </div>
      // </div>


      <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
    

        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
                <img src={data && data.img} class="img-fluid w-100" alt="" />
        </div>
    
      </div>
    </div>
    </div>
    
  );
}

export default singleModel;
