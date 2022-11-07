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
          I have experience in building software combine with Deep Learning. Currently, I use Python, JavaScript, Kotlin and 
          C# together with Django, React, Android Studio, ASP.NET, RESTful API, and PostgreSQL to build application.
        </p>

        <br />

        <p className="text-xl">
          As a Software Engineer I have to adapt to change in technology. I am a 
          self-taught man who can learn new thing fast. I can change from one language 
          and its framework to others in short time. Always, youtube and online tutorial are 
          tool of mine for updating new language and framework. I can build Desktop, Web, Windows and Android applications.
        </p>
      </div>
    </div>
  );
};

export default About;
