import React from "react";
import "./PricingStyles.css";
const Pricing = () => {
  return (
    <div className="pricing">
      <div className="conatiner">
        <div className="top-content">
          <div>
            <h1>
              Everthing you need for <span>$99 a month</span>
            </h1>
            <p>
              Includes every feature we offer plus ulimited projects and
              ulimited users.
            </p>
          </div>
          <div className="btn-div">
            <button>Get Started Today</button>
          </div>
        </div>
        <div className="bottom-content">
          <div className="card">
            <p>
              <span>Everything you need</span>
            </p>
            <h3>All-in-one platform</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              placeat et vero sint laudantium tempore adipisci voluptatem
              numquam repudiandae fugit!
            </p>
          </div>
          <div className="card">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
