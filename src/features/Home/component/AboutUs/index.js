import React from "react";
import data from "constant/services";
import "./style.scss";

const About = () => {
  return (
    <section className="section">
      <div className="TitleWrapper">
        <h2>
          <span>/</span>
          about us
        </h2>
      </div>
      <div className="AboutWrapper__content section-center">
        {data.map((item) => (
          <article key={item.id}>
            <span>{item.icon}</span>
            <h4>{item.label}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
