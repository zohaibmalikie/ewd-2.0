import React from "react";
import {MainPortfolioFile  } from "./mainPortfolioFile";
import "./assets/css/portfolio.css";
function portfolio(props) {
  let portfolio =[
    {
      name:'Zohaib Malik',
      cl: "img_one img-fluid",
      // img:img_one
    },
    {
      name:'Adeel',
      cl: "img_two img-fluid"
    },
    {
      name:'Asad',
      cl: "img_three img-fluid"
      
    }
  ]
  return (
    <React.Fragment>
      <div className="row m-0 w-100 main_padding">
        {/* card one */}
      <MainPortfolioFile portfolio={portfolio}/>
    
     
      </div>
    </React.Fragment>
  );
}

export default portfolio;
 