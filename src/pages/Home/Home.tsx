import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
const Home = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/") {
      (() => navigate("/log-in"))();
    }
  }, [navigate, pathname]);

  return (
    <div className="lg:px-20 px-2">
      <div className="pt-8 ">
        <Nav />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
