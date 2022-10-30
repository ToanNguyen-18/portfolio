import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          I love codding and I love logic. I love frontend, backend and Api. I love 
          language and I love framework. That's why I am now a Full Stack Developer. 
          Starting as an Assembly programer for 8051 MCU, now I know Python, Kotlin, 
          JavaScript and Java. I also know OOPs and its 4 pillars charateristics. 
          I use frameworks Django, React, and Spring and tools are Visual Code, 
          PyCharm, Android Studio. I also know RESTful api and MySQL and PostgreSQL.
        </p>

        <br />

        <p className="text-xl">
          As a Full Stack Developer I have to adapt to change in technology. I am a 
          self-taught man who can learn new thing fast. Because of understanding OOps, 
          I can change from one language and its framework to others in a short time 
          as needed. Always, youtube and tutorial course are tool of mine for new 
          technologies, new programming language and new framework. Currently I build
          Web, Windows and Android applications.
        </p>
      </div>
    </div>
  );
};

export default About;
