import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        EXPLORE
        <br className="max-md:hidden" />
        <span className="gray_gradient text-center">
          Prompts From Designers
        </span>
      </h1>
      <p className="desc text-center">
        Whereas disregard and contempt for human rights have resulted
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
