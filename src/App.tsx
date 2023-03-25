import React from 'react';
import "./App.scss";
import learnhowowl from "./static/images/learnhowowl.png"

function App() {
  return (
      <div className={"banner flex justify-center items-center w-full h-screen"}>
          <div className={"w-full max-w-4xl"}>
              <div className={"flex justify-around py-5 gap-10"}>
                  <div className={"flex flex-col justify-center"}>
                      <div className={"flex flex-col gap-5"}>
                          <div>
                              <h1 className={"title"}>Learn How<span className={"dots"}>...</span>soon</h1>
                              <div className={"subtitle"}>Knowledge at your fingertips</div>
                          </div>
                          <div className={"description"}>
                              Get ready to explore thousands of different articles and learn something new. Coming soon.
                          </div>
                      </div>
                  </div>
                  <img src={learnhowowl} alt="Learn How to Do Things with Mr. Owl | Learn How"/>
              </div>
          </div>
      </div>
  );
}

export default App;
