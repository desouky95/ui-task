import React from "react";
import AnalyticCard from "../../shared/components/Cards/AnalyticCard/AnalyticCard";
import { projects } from "./data";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Icons from "../../shared/components/Icons/Icons";

const Projects = () => {
  return (
    <>
      <section className="grid grid-cols-3 gap-6 px-9 py-8">
        <AnalyticCard
          status="up"
          title="Today Sales"
          value={2456}
          icon={<Icons.RisingArrow />}
        />
        <AnalyticCard
          status="idle"
          title="New Products"
          value={221}
          icon={<Icons.IdleArrow />}
        />
        <AnalyticCard
          status="down"
          title="Inventory"
          value={1425}
          icon={<Icons.DownArrow />}
        />
      </section>
      <section className="px-9 py-8">
        <h1 className="text-2xl font-semibold mb-6">Your Favorites</h1>

        <div
          className="grid grid-cols-3 gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 3fr))",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={`${project.name}-${project.type}`} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
