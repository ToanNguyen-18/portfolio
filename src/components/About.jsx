import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          I love frontend and I love backend. I love language and I love framework. That's why I am a Software Engineer. 
          I have experience with Python, JavaScript, and Kotlin together with Django, React, Android Studio, RESTful API, and PostgreSQL...
        </p>

        <br />

        <p className="text-xl">
          As a Software Engineer I have to adapt quickly to changeable technologies. I am a self-taught man who can create Web, Windows and Android applications.
          I can change from one language to another in very short time. Everyday, youtube and online news are tools for updating new skills and technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
