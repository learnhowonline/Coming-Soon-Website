import React from 'react';
import "./App.scss";
import learnhowowl from "./static/images/learnhowowl.webp"

function App() {
  return (
      <div className={"banner flex justify-center items-center w-full h-full xl:h-screen"}>
          <div className={"w-full max-w-full xl:max-w-4xl"}>
               <div className={"flex flex-col xl:flex-row justify-around py-5 gap-5 h-full"}>
                  <div className={"flex flex-col justify-center"}>
                      <div className={"flex flex-col gap-5 px-5 xl:px-0"}>
                          <div className={"flex flex-col"}>
                            <div className={"flex flex-col gap-5"}>
                                <div className={"flex flex-col xl:flex-row gap-5 mt-10 xl:mt-0"}>
                                    <h1 className={"title"}>Learn</h1>
                                    <span className={"title"}>How<span className={"dots"}>...</span></span>
                                    <span className={"title"}>Soon</span>
                                </div>
                                <div className={"subtitle"}>Knowledge at your fingertips</div>
                            </div>
                              {/* <h1 className={"title max-w-full flex flex-col gap-5 xl:flex-row xl:gap-0"}>
                                    <span>Learn</span> <span>How</span>
                                    <div>
                                        <span className={"dots"}>...</span>
                                        <span>soon</span>
                                    </div>
                                </h1>
                              <div className={"subtitle"}>Knowledge at your fingertips</div> */}
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
