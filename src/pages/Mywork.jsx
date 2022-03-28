import React from "react";
import Layout from "../components/Layout";
import Projects from "./../components/Projects";
import CollaborativeProjects from "../components/CollaborativeProjects";

const Mywork = () => {
  return (
    <>
      <Layout>
        <section>
          <div>
            <Projects />
          </div>
          <div>
            <CollaborativeProjects />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Mywork;
