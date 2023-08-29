import React, { FC } from "react";
import { Project } from "./config";
import { Buffer, capitalize} from "./utils";

export const ProjectItem: FC<{ project: Project }> = ({ project }) => {
    function addPeriod(s: undefined): undefined;
    function addPeriod(s: string): string;
    function addPeriod(s: string | undefined) {
        if (!s) return s;
        if (s[s.length - 1] !== ".") {
            return s + ".";
        }
        return s;
    }
    project.name = capitalize.title(project.name);
    project.short = addPeriod(capitalize.first(project.short));
    project.steps = project.steps && project.steps.map(addPeriod).map(capitalize.first);
    project.type = project.type && capitalize.first(project.type);
    return (
        <div>
            <div className="flex flex-row">
                <p className="text-rose-800">
                    <b>{project.name}</b>
                </p>
                <Buffer width="4px" />
                {!!project.type ? (
                    <p>
                        <i>{project.type}</i>
                    </p>
                ) : null}
            </div>
            {!!project.dates ? (
                <p className="text-xs">
                    <i>{project.dates}</i>
                </p>
            ) : null}
            <div className="text-sm">{project.short}</div>
            {!!project.steps && (
                <ul style={{ listStyleType: "disc" }} className="ml-8 text-sm">
                    {project.steps.map((step) => (
                        <li key={step}>{step}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export const ProjectList: FC<{ projects: Project[] }> = ({ projects }) => {
    return (
        <div className="flex-grow flex flex-col justify-around">
            {projects
                .filter((p) => !p.exclude)
                .map((project) => (
                    <ProjectItem project={project} key={project.name} />
                ))}
        </div>
    );
};
