import React from "react";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold mb-5">Find us On</h1>
      <div>
        <div className="join join-vertical w-full gap-3 rounded-none mb-5">
          <button className="btn join-item justify-start"><FaFacebook /> Facebook</button>
          <button className="btn join-item justify-start"><FaTwitterSquare /> Twitter</button>
          <button className="btn join-item justify-start"><FaSquareInstagram /> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
