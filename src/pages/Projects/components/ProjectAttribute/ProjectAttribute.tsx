import React from "react";

type ProjectAttributeProps = {
  icon: JSX.Element;
  title: string;
};
const ProjectAttribute = ({ icon, title }: ProjectAttributeProps) => {
  return (
    <span className="flex items-center gap-2">
      {icon}
      <span className="text-xs text-gray-600">{title}</span>
    </span>
  );
};

export default ProjectAttribute;
