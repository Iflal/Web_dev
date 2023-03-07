import React from "react";
import "./index.css";
import school from "../assets/school.jpg";
import ucsc from "../assets/ucsc.jpg";

function Journey() {
    return(
        <div>
        <div className="journey">
          <h1 className="title hed center">My Journey</h1>
          <div className="container" style={{paddingTop: '2cm'}}>
            <div>
              <p className="title text4">School</p>
              <p className="subtitle text4">2016 - 2019</p>
              <br />
              <p className="title text5" style={{color: 'whitesmoke'}}>I finished my Advanced Level<br />in BT/BC/
                M.M.V(National School)</p>
            </div>
            <figure className="image right">
              <img className="pic" src={school} alt="school" />
            </figure>
          </div>
        </div>
        <div className="container">
          <div>
            <figure className="image left">
              <img className="pic" src={ucsc} alt="uni" />
            </figure>
          </div>
          <div style={{marginLeft: '10em'}}>
            <p className="title text6">UCSC</p>
            <p className="subtitle text6">2021 - Present</p>
            <br />
            <p className="title text5" style={{color: 'whitesmoke'}}>I started my bachelor's degree in Information
              System at University of Colombo School of Computing</p>
          </div>
        </div>
      </div>  
    );
}

export default Journey;