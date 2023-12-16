import React from "react";
import assets from "../../../../assets/assets";
import Card from "../../../../shared/components/Cards/Card/Card";
import Icons from "../../../../shared/components/Icons/Icons";
import ProjectAttribute from "../ProjectAttribute/ProjectAttribute";

type Project = {
  name: string;
  description: string;
  city: string;
  no_of_bedrooms: number;
  type: string;
};

type ProjectCardProps = { project: Project };
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="grid gap-6">
      <img
        className="rounded-lg max-h-64 w-full object-cover"
        src={assets.images.projectDummy}
      />
      <div>
        <h1 className="text-lg font-semibold">{project.name}</h1>
        <p className="text-xs font-normal">{project.description}</p>
      </div>
      <div className="flex gap-4 items-center">
        <ProjectAttribute icon={<Icons.Pin />} title={project.city} />
        <ProjectAttribute
          icon={<Icons.Gallery />}
          title={`${project.no_of_bedrooms} bedroom`}
        />
        <ProjectAttribute icon={<Icons.Business />} title={project.type} />
      </div>
      <button className="rounded-full border border-gray-200 py-5 text-sm">
        View listing details
      </button>
    </Card>
  );
};

export default ProjectCard;
