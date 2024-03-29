import React, { FC } from "react";
import Divider from "./Divider";
import { ContactItem } from "./Contacts";
import { ProjectItem, ProjectList } from "./Projects";
import { ToolsList2Col } from "./ToolsList";
import Blurb from "./Blurb";
import { Config, Tool } from "./config";
import Education from "./Education";
import theme from "./theme";

const LeftColSection: FC<{ children: React.ReactNode; title: string }> = ({
    children,
    title,
}) => {
    return (
        <div className="flex flex-col items-end">
            <div className={`text-lg text-${theme.accent.tw}`}>
                <u>
                    <b>{title}</b>
                </u>
            </div>
            {children}
        </div>
    );
};

const Resume: FC<{ config: Config }> = ({ config }) => {
    return (
        <html className="bg-slate-700">
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body
                style={{
                    printColorAdjust: "exact",
                }}
                className="w-[8.5in] h-[11in] p-[0.25in] bg-white flex flex-col"
            >
                <div className="flex flex-row justify-between pb-2">
                    <div className="grow flex-none">
                        <div
                            className={`flex flex-col justify-center mb-2 text-${theme.accent.tw}`}
                        >
                            <p className="text-4xl">Ben Kunkle</p>
                            <p className="text-xl">Aspiring Developer</p>
                        </div>
                    </div>
                    <div className="w-1/12"></div>
                    <div className="shrink">
                        <Blurb blurb={config.blurb} />
                    </div>
                </div>
                <div className="flex-grow flex flex-row">
                    <div id="left" className="flex flex-col justify-around">
                        <LeftColSection title="Contact">
                            {config.contacts.map((contact) => (
                                <ContactItem
                                    info={contact}
                                    key={contact.value}
                                    dir="right"
                                />
                            ))}
                        </LeftColSection>
                        <LeftColSection title="Skills">
                            <ToolsList2Col tools={config.tools} dir="right" />
                        </LeftColSection>
                        <LeftColSection title="Education">
                            {config.education.map((edu) => (
                                <Education edu={edu} key={edu.name.short} />
                            ))}
                        </LeftColSection>
                    </div>
                    <Divider
                        color="rose-800"
                        orientation="vertical"
                        className="mx-4"
                    />
                    <div id="right" className="flex flex-col justify-around">
                        {config.projects
                            .filter((p) => !p.exclude)
                            .map((project) => (
                                <ProjectItem
                                    project={project}
                                    key={project.name}
                                />
                            ))}
                    </div>
                </div>
            </body>
        </html>
    );
};

export default Resume;
