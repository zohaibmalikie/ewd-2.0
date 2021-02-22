import React, { useState } from "react";
import "./assets/css/portfolio.css";
import SingleModel from "./models/singleModel";
export const MainPortfolioFile = ({ portfolio }) => {
  const [ModelItem, setModelItem] = useState(null);
  const handleModel = (item) => {
    setModelItem(item);
  };
  console.log(ModelItem, "ModelItem");
  return (
    <div className="boxShadow_portfolio d-flex justify-content-between">
      {portfolio.map((item) => {
        return (
          <>
      <div className="col-md-12 p-0">


            <div className="pnav">
              <a href="#" className={item.cl} onClick={()=>handleModel(item)}>
               
        
                {/* <img
                  onClick={()=>handleModel(item)}
                  // style={{ width: "100px", height: "100px" }}
                  // src={item.img}
                  alt=""
                  className="img-fluid img_one"
                /> */}
              </a>
            </div>
            <div className="text-center border">
              {" "}
              <div className="bottom_card_text">{item.name}</div>
            </div>
                </div>
          </>
        );
      })}
      <SingleModel data={ModelItem} />
    </div>
  );
};
