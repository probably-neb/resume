import React, { FC } from "react";
import Divider from "./Divider";
import ContactInfoList from "./Contacts";
import ProjectList from "./Projects";
import ToolsList from "./ToolsList";
import Blurb from "./Blurb";
import { Config } from "./config";

const Resume: FC<{ config: Config }> = ({ config }) => {
    const half= "4.25in";
    const quarter = "2.125in";
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
                <div className="flex justify-center">
                    <p className="text-4xl">Ben Kunkle</p>
                </div>
                <ContactInfoList infos={config.contacts} />
                <div className="flex flex-col">
                    <div className="my-3">
                    <Blurb blurb={config.blurb} />
                    </div>
                    <ToolsList tools={config.tools} />
                </div>
                <Divider orientation="horizontal" lineStyle="solid" />
                <ProjectList projects={config.projects} />
            </body>
        </html>
    );
};

export default Resume;
