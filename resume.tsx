import React, { FC } from "react";
import { renderToString } from "react-dom/server";
import puppeteer from "puppeteer";
import fs from "fs";
import {
    loadConfig,
    Config,
    ContactInfo,
    Education,
    Project,
} from "./src/config";

interface DividerProps {}
const Divider: FC<DividerProps> = () => {
    return <div className="w-full border-b-2 border-gray-100 my-4"></div>;
};

interface ContactInfoProps {
    info: ContactInfo;
}

const ContactInfo: FC<ContactInfoProps> = ({ info }) => {
    return <p>{info.pretty ?? info.val}</p>;
};

interface ContactInfoListProps {
    infos: ContactInfo[];
}

const ContactInfoList: FC<ContactInfoListProps> = ({ infos }) => {
    return (
        <div className="flex flex-row">
            {infos.map((info) => (
                <ContactInfo info={info} key={info.val} />
            ))}
        </div>
    );
};

interface ResumeProps {
    config: Config;
}
const Resume: FC<ResumeProps> = ({config}) => {
    return (
        <html>
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body style={{ width: "8.5in", height: "11in" }} className="">
                <div className="flex justify-center">
                    <p className="text-4xl">Ben Kunkle</p>
                </div>
                <Divider />
            </body>
        </html>
    );
};

async function generatePDFPuppeteer(): Promise<Buffer> {
    const config = loadConfig();
    const resume = renderToString(<Resume config={config}/>);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(resume);
    const pdf = await page.pdf({ format: "letter" });
    await browser.close();
    return pdf;
}

generatePDFPuppeteer().then((pdf) => {
    fs.writeFile("resume.pdf", pdf, (err) => {
        if (err) console.error(err);
    });
});
