import React, { FC } from "react";
import Divider from "./Divider";
import { ContactItem } from "./Contacts";
import { ProjectList } from "./Projects";
import { ToolItem } from "./ToolsList";
import Blurb from "./Blurb";
import { Config } from "./config";

const LeftColSection: FC<{ children: React.ReactNode; title: string }> = ({
    children,
    title,
}) => {
    return (
        <div className="flex flex-col items-end">
            <div className="text-lg">
                <u>{title}</u>
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
                    width: "8.5in",
                    height: "11in",
                    printColorAdjust: "exact",
                }}
                className="p-[0.25in] bg-white"
            >
                <div className="flex flex-row justify-between pb-2">
                    <div className="grow flex-none">
                        <div className="flex flex-col justify-center mb-2">
                            <p className="text-4xl">Ben Kunkle</p>
                            <p className="text-xl">Aspiring Developer</p>
                        </div>
                    </div>
                    <div className="w-1/12"></div>
                    <div className="shrink">
                        <Blurb blurb={config.blurb} />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div id="left" className="flex flex-col justify-around">
                        <LeftColSection title="Contact">
                            {config.contacts.map((contact) => (
                                <ContactItem
                                    info={contact}
                                    key={contact.value}
                                />
                            ))}
                        </LeftColSection>
                        <LeftColSection title="Skills">
                            {config.tools.map((tool) => (
                                <ToolItem tool={tool} key={tool.name} />
                            ))}
                        </LeftColSection>
                        <LeftColSection title="Education">
                            Cal Poly San Luis Obispo 2021-present
                        </LeftColSection>
                    </div>
                    <Divider
                        color="rose-400"
                        orientation="vertical"
                        className="mx-4"
                    />
                    <div id="right">
                        <ProjectList projects={config.projects} />
                    </div>
                </div>
            </body>
        </html>
    );
};

export default Resume;
