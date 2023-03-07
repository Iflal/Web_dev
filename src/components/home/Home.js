import React from 'react';
import "./index.css";
import profile from "../assets/profile.jpg";
// import locate from "../assets/locate.png";

function Home() {
    return (
        <section>
            <div>
                <div className="container center">
                    <figure className="image">
                        <img src={profile} alt="profile" style={{ float: 'left', borderRadius: '50%' }} />
                    </figure>
                    <div className="text">
                        <p>Hi.<br />I'm Iflal Ismlebbe.<br />A UG student.</p>
                    </div>
                </div>
            </div>
{/* 
            <div className="container center">
                <figure style={{paddingTop: '1cm'}}>
                    <img src={locate} alt="picture" />
                </figure>
                <div className="text2">
                    <p>46<sup>th</sup> Lane,<br />Colombo - 06.</p>
                </div>
            </div> */}
        </section>
    );
}

export default Home;
