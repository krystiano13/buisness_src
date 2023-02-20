import React from "react";
import "./Form.css";

const Info = () => {
  return (
    <aside className="Info">
      <h3 className="Info__title">OUR OFFICES</h3>
      <p className="Info__text">
        Even the all-powerful Pointing has no <br /> control about the blind
        texts it is an <br /> almost unorthographic.
      </p>
      <h3 className="Info__title">OUR OFFICE</h3>
      <p className="Info__text">
        908 Broadway, <br /> San Francisco, <br /> CA 94133
      </p>
      <h3 className="Info__title">WORKING HOURS</h3>
      <p className="Info__text">9AM - 3PM, Mon to Fri</p>
      <h3 className="Info__title">CONTACT</h3>
      <p className="Info__text">
        contact@business.com <br /> 01 (650) 658 6822
      </p>
    </aside>
  );
};

export { Info };
