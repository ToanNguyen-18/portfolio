import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col sm:justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          I love codding and I love logic. I love threading and I love timer.
          I love language and I love framework. I love frontend, backend and Api...
          That's why I want to be a good Full Stack Developer. It's my dream since
          I was at school. Starting as an Assembly language programer for 
          8051 MCU families for over 5 years. Now, I came back to codding field 
          for over 3 years as a Full Stack Developer.
        </p>

        <br />

        <p className="text-xl">
          I've run through 3 project so far in marketing, security and school fields.
          Applying Deep Learing, writing API and database in python and django in server.
          I can create desktop apps run on windows by PyQT5. Web apps run on browser by 
          React, Boostrap or plain HTML, CSS and JavaScript. For Android I use Kotlin. 
          I know OOPs and its 4 pillars like Polymorphism, Inheritance, Encapsulation and 
          Abstraction.
        </p>

        <br />

        <p className="text-xl">
          I am a self-taught man and always study by myself new framework and new language.
          I completed Kotlin and Adroid Studio in 4 months and React in a month. I use React 
          to write this portfolio Website hosting in Github pages. I am able to learn new 
          things quickly and love to take use of available resource to achive the expecting result.
        </p>
      </div>
    </div>
  );
};

export default About;
