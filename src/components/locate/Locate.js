import React from "react";
import "./index.css";
import locate from '../assets/locate.png';

function Locate(){
    return(
      <div className="center">
        <figure style={{paddingTop: '1cm'}}>
          <img className="locate" src={locate} alt="logo" />
          <div className="text2">
          <p>46<sup>th</sup> Lane,<br />Colombo - 06.</p>
        </div>
        </figure>
      </div>
    );
}

export default Locate;