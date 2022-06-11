import React from "react";
import { FaDatabase } from "react-icons/fa";
import "./TestimonialsStyles.css";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase />
              Staxx
            </i>
            <p className="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              amet velit in, a alias quasi similique animi nisi voluptas neque?
            </p>
            <div className="name">
              <p>Marie Chilvers</p>
              <p>CEO, Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
