import React from 'react';
import "./App.scss";
import learnhowowl from "./static/images/learnhowowl.webp"

function App() {
  return (
      <div className={"banner flex justify-center items-center w-full h-max min-h-screen"}>
          <div className={"w-full max-w-full lg:max-w-4xl"}>
               <div className={"flex flex-col lg:flex-row justify-between py-5 gap-5"}>
                  <div className={"flex flex-col justify-center"}>
                      <div className={"flex flex-col gap-5 px-5 lg:px-0"}>
                          <div className={"flex flex-col"}>
                            <div className={"flex flex-col gap-1"}>
                                <div className={"flex flex-col lg:flex-row gap-1 mt-10 lg:mt-0"}>
                                    <h1 className={"title text-8xl lg:text-6xl"}>Learn</h1>
                                    <span className={"title text-8xl lg:text-6xl"}>How<span className={"dots"}>...</span></span>
                                    <span className={"title text-8xl lg:text-6xl"}>Soon</span>
                                </div>
                                <div className={"subtitle"}>Knowledge at your fingertips</div>
                            </div>
                          </div>
                          <div className={"description"}>
                              Get ready to explore thousands of different articles and learn something new. Coming soon.
                          </div>
                      </div>
                  </div>
                  <div className={"flex justify-center mb-10"}>
                    <img src={learnhowowl} alt="Learn How to Do Things with Mr. Owl | Learn How"/>
                  </div>
              </div> 
          </div>
      </div>
  );
}

export default App;
