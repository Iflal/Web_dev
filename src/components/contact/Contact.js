import { BsFillTelephoneFill } from "react-icons/bs";
import {BiMailSend} from "react-icons/bi";
import {BsLinkedin} from "react-icons/bs";
import React from 'react';

function Contactus(){
    return(
        <footer>
        <h1 className="title hed">Contact me</h1>
        <div className="icons">
          <div>
            <BsFillTelephoneFill style={{color:'white'}} size='4rem' />
            <p className="title is-4 text5" style={{color: 'whitesmoke'}}>+94775029123</p>
          </div>
          <div>
            <BiMailSend style={{color:'white'}} size='4rem' />
            <p className="title is-4 text5" style={{color: 'whitesmoke'}}><a href="mailto:iflalm5@gmail.com">E-mail: iflalm5@gmail.com</a></p>
          </div>
          <div>
            <BsLinkedin style={{color:'white'}} size='4rem' />
            <p className="title is-4 text5" style={{color: 'whitesmoke'}}><a href="https://www.linkedin.com/in/iflalismalebbe/">Iflal Ismalebbe</a></p>
          </div>
        </div>
      </footer>
    );
}

export default Contactus;