import React, { FC } from "react";
import { renderToString, renderToStaticNodeStream } from "react-dom/server";
import puppeteer from "puppeteer";
import fs from "fs";
import {
    loadConfig,
    Config,
    ContactInfo,
    Education,
    Project,
} from "./src/config";

import util from "util";
import stream from "stream";
const asyncPipe = util.promisify(stream.pipeline);

interface DividerProps {}

const Divider: FC<DividerProps> = () => {
    return (
        <div className="w-full border-b-2 border-dashed border-gray-500 my-4"></div>
    );
};

const ContactInfo: FC<{ info: ContactInfo }> = ({ info }) => {
    let txt: ReactElement | string = info.value
    if (info.href) {
        txt = (
            <a href={info.href} target="_blank">
                {txt}
            </a>
        );
    }
    return <p className="text-sm">{txt}</p>;
};

const ContactInfoList: FC<{ infos: ContactInfo[] }> = ({ infos }) => {
    return (
        <div className="flex flex-row justify-between">
            {infos.map((info) => (
                <ContactInfo info={info} key={info.value} />
            ))}
        </div>
    );
};

interface ResumeProps {
    config: Config;
}
const Resume: FC<ResumeProps> = ({ config }) => {
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
                <Divider />
            </body>
        </html>
    );
};

type ReactElement = React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
>;

async function saveHTML(element: ReactElement): Promise<void> {
    let readable = renderToStaticNodeStream(element);
    let writeable = fs.createWriteStream("resume.html");
    await asyncPipe(readable, writeable);
}

async function generatePDF(): Promise<Buffer> {
    const config = loadConfig();
    const resume = renderToString(<Resume config={config} />);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(resume);
    const pdf = await page.pdf({ format: "letter" });
    await browser.close();
    return pdf;
}

function savePDF(pdf: Buffer): void {
    fs.writeFile("resume.pdf", pdf, (err) => {
        if (err) console.error(err);
    });
}

Promise.all([
    generatePDF().then(savePDF),
    saveHTML(<Resume config={loadConfig()} />),
]);
