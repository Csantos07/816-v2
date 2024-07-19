// Home.js
import React from "react";
import "./Philosophy.scss";

const Philosophy = () => {
  return (
    <section className="philosophy" id="philosophy">
      <h1>
        The <span>816</span> Approach
      </h1>
      <span className="sub">
        "Our goal is to teach you how to respond to pain and injury now and
        going forward."
      </span>
      <p>
        816 Rehab and Performance is here to provide person-centered care to
        those dealing with pain and injury. Our approach is focused on
        collaborating to build a rehab plan geared towards your specific goals.
      </p>
      <p>
        Plans are based heavily on activity modification, movement progression,
        and education.
      </p>
      {/* <button className="call-to-action">Free Discovery Call</button> */}
    </section>
  );
};

export default Philosophy;
