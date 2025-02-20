import React from "react";
import leetcode from "../assets/portfolio/leetcode.webp";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
import reactWeatherApp from "../assets/portfolio/weatherApp.png";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: leetcode,
      demo: '',
      code: 'https://github.com/JesilaRatnaprin/leetCode' 
    },
    {
      id: 2,
      src: reactWeatherApp,
      demo: 'https://js-react-weather-app.netlify.app/',
      code: 'https://github.com/JesilaRatnaprin/jesi-react-weather-app'
    },
    // {
    //   id: 3,
    //   src: navbar,
    // },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 grow h-3/4 w-full"
              />
              <div className="flex items-center justify-center">
                {demo ? (
                  <button 
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick= {() => window.open(demo,"_blank")}>
                    Demo
                  </button>
                ) : (
                  ""
                )}

                <button 
                className = {`${demo ? 'w-1/2' : 'w-full'} px-6 py-3 m-4 duration-200 hover:scale-105`}
                //className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                onClick= {() => window.open(code,"_blank")}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
