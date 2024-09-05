// Home.js
import React from "react";
import "./Provider.scss";

const Provider = () => {
  return (
    <div className="provider" id="provider">
      <div className="provider-left-container">
        <h1 className="mobile">Your Provider</h1>

        <img
          className="provider-image"
          src="/mobile-provider-image.svg"
          alt="Dr. Michael Santos"
        />

        <div className="socials">
          <a
            className="social-media-link"
            href="https://www.instagram.com/drmikesantos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.svg" alt="Instagram" />
          </a>

          <a
            className="social-media-link"
            href="mailto:mike@816rehabandperformance.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/mail.svg" alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="provider-right-container">
        <h1 className="desktop">Your Provider</h1>
        <p>
          Dr. Michael Santos is a licensed chiropractor based out of Kansas
          City. He graduated from the University of South Florida in 2013 with a
          degree in biomedical sciences.
        </p>
        <p>
          Before starting graduate studies, Michael gained experience in
          operations management and personal training. As a personal trainer he
          discovered a deeper desire to help those dealing with pain and injury.
        </p>
        <p>
          In 2021, Michael completed his doctorate of chiropractic at Palmer
          College in Port Orange, FL.
        </p>

        <a
          href="https://816rehabandperformance.janeapp.com/#/staff_member/1/bio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="call-to-action">Schedule a Call</button>
        </a>
      </div>
    </div>
  );
};

export default Provider;
