import React from "react";
import "./Home.scss";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="ins-home">
        <div className="ins-home-wraper">
          <HomeHeader />
          <div className="ins-time-line">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
