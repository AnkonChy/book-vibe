import React from "react";
import Banner from "../components/Banner";
import Books from "../components/Books";

const Home = () => {
  return (
    <div>
      {/* Banner  */}
      <Banner></Banner>
      {/* Dynamic books  */}
      <Books></Books>
    </div>
  );
};

export default Home;
