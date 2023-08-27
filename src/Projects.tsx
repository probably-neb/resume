import React, { FC } from 'react';
import { Project } from './config';

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
    return <div>{project.name}</div>
}

const ProjectList: FC<{ projects: Project[] }> = ({ projects }) => {
    return <div>
        {projects.map((project) => <ProjectItem project={project} key={project.name}/>)}
    </div>
}

export default ProjectList;
