import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import kotlin from "../assets/kotlin.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import c_sharp from "../assets/c_sharp.png";
import django from "../assets/django.png";
import android from "../assets/android.png";
import postgresql from "../assets/postgresql.png";
import mysql from "../assets/mysql.png";
import restfulapi from "../assets/restfulapi.png";
import php from "../assets/php.png";
import java from "../assets/java.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-green-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-white",
    },
    {
      id: 7,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: c_sharp,
      title: "C#",
      style: "shadow-gray-100",
    },
    {
      id: 10,
      src: django,
      title: "Django",
      style: "shadow-green-100",
    },
    {
      id: 11,
      src: android,
      title: "Android",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: postgresql,
      title: "Postgre SQL",
      style: "shadow-green-100",
    },
    {
      id: 13,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-900",
    },
    {
      id: 14,
      src: restfulapi,
      title: "RESTful Api",
      style: "shadow-blue-400",
    },
    {
      id: 15,
      src: php,
      title: "PHP",
      style: "shadow-yellow-400",
    },
    {
      id: 16,
      src: java,
      title: "Java",
      style: "shadow-sky-800",
    },

  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-2xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-4 sm:py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center px-0 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
