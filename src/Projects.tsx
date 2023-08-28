import React, { FC } from "react";
import { Project } from "./config";
import { Buffer } from "./utils";

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
    return (
        <div>
            <div className="flex flex-row">
                <p>
                    <b>{project.name}</b>
                </p>
                <Buffer width="4px" />
                {!!project.type ? (
                    <p>
                        <i>{project.type}</i>
                    </p>
                ) : null}
            </div>
            <div className="text-sm">{project.short}</div>
            {!!project.steps && (
                <div className="flex flex-row">
                    <Buffer width="40px" />
                    <ul style={{ listStyleType: "disc" }}>
                        {project.steps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const ProjectList: FC<{ projects: Project[] }> = ({ projects }) => {
    return (
        <div>
            {projects
                .filter((p) => !p.exclude)
                .map((project) => (
                    <ProjectItem project={project} key={project.name} />
                ))}
        </div>
    );
};

export default ProjectList;
