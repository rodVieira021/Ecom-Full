import React from "react";
import "./Parallax.css";

const Parallax = () => {
  return (
    <div className="body">
      <div className="main">
        <section class="no-parallax">
          <h1>Fun fact:</h1>
        </section>
        <section class="parallax bg">
          <h1>
            The sound that occurs when you snap your fingers is made by your
            middle finger hitting your palm!
          </h1>
        </section>
        <section class="no-parallax">
          <h1>Have a nice day!</h1>
        </section>
      </div>
    </div>
  );
};

export default Parallax;
