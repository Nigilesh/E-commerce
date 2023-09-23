import React from "react";
import Header from "./Header";

const Slider = () => {
    return (
        <>
       
            <div className="hero border-1 pb-4">
                <div className="card bg-success text-black border-0 mx-3 ">
                    <img
                        className="card-img"
                        src={require('./home.webp')} 
                        alt="Card"
                        
                    />
                    <div className="card-img-overlay d-flex align-items-center">
                        <div className="container">
                            <h5 className="card-title fs-3 text-light fw-lighter">New Season Arrivals</h5>
                            <p className="card-text text-light fs-5 d-none d-sm-block ">
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;