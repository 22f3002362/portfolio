import { React, useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css";

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Programmer", "Graphic Designer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <h1 className="slide-in">
            Hi, I'm <span className="highlight">Akarsh Gupta</span>
          </h1>
          <h2 className="typed-wrapper">
            I'm a <span ref={typedRef}></span>
          </h2>
          <p className="fade-in">
            Creating digital experiences that make a difference
          </p>
        </div>
        <div className="hero-buttons fade-in">
          <a
            href="https://gupta-designer.vercel.app"
            className="btn btn-outline"
          >
            Designer Portfolio
          </a>
          <a href="#projects" className="btn btn-outline">
            View Work
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
