import React, { FC } from "react";
import Divider from "./Divider";
import ContactInfoList from "./Contacts";
import ProjectList from "./Projects";
import { Config } from "./config";

const Resume: FC<{config: Config}> = ({ config }) => {
    return (
        <html>
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body
                style={{
                    width: "8.5in",
                    height: "11in",
                    printColorAdjust: "exact",
                }}
                className="p-[0.25in]"
            >
                <div className="flex justify-center">
                    <p className="text-4xl">Ben Kunkle</p>
                </div>
                <ContactInfoList infos={config.contacts} />
                <Divider orientation="horizontal" lineStyle="solid"/>
                <ProjectList projects={config.projects}/>
            </body>
        </html>
    );
};

export default Resume;

