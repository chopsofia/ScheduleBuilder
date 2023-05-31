import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";

//Components
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex justify-between h-20">
        <div className="w-5/12">
          <Button to={`/faculties`}>Факультети</Button>
        </div>
        <div className="w-5/12">
          <Button to={`/teachers`}>Викладачі</Button>
        </div>
      </div>

    </Layout>
  );
};

export default Home;
