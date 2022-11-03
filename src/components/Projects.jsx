import React from "react";
import student_monitoring from "../assets/portfolio/student_monitoring.jpg";
import wifi_marketing from "../assets/portfolio/wifi_marketing.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import detection from "../assets/portfolio/detection.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: student_monitoring,
    },
    {
      id: 2,
      src: detection,
    },
    {
      id: 3,
      src: wifi_marketing,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  const openFullscreen = (n) => {
      let elem = document.getElementById(n);

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-2xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-4 sm:py-6">Check out some of my work right here</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 px-0 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                id={id}
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                onClick={() => openFullscreen(id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
