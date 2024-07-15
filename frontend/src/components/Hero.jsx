import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            HealthHaven stands as a state-of-the-art facility, meticulously designed to offer comprehensive healthcare services imbued with compassion and expertise. Our distinguished team of skilled professionals is unwavering in its commitment to delivering personalized care, meticulously tailored to meet the unique needs of each patient. At HealthHaven, we hold your well-being in the highest regard, ensuring a seamless and harmonious journey towards achieving optimal health and wellness.


          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
