import React from 'react';
import { ArrowDown } from 'lucide-react';
import skimage from "../assets/skimage.jpeg";

const Homepagesection = () => {
  return (
    <section
      id="#hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-10 max-w-6xl z-10">
        
        
        <div className="text-center lg:text-left flex-1 space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm</span>
            <br />
            <span className="text-primary opacity-0 animate-fade-in-delay-2"> Sourav</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3"> Kumar</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
            "I'm a passionate Frontend Developer with a strong focus on building responsive, user-friendly web applications using modern technologies like React, Tailwind CSS, and JavaScript."
          </p>

          <div className="animate-fade-in-delay-4 opacity-0">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* Image Section with floating animation */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[180px] md:w-[200px] lg:w-[400px]">
            <div className="floating-img ">
              <img
                src={skimage}
                alt="Sourav 3D Visual"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground">scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default Homepagesection;

