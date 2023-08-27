import React, { FC } from "react";
import { renderToString, renderToStaticNodeStream } from "react-dom/server";
import puppeteer from "puppeteer";
import fs from "fs";
import {
    Config,
    ContactInfo,
    Education,
    Project,
    ReactElement,
} from "./config";

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
    let txt: ReactElement | string = info.value;
    if (info.href) {
        txt = (
            <a href={info.href} target="_blank">
                {txt}
            </a>
        );
    }
    const Icon = info.icon;
    return (
        <div className="flex flex-row justify-center items-center">
            <Icon />
            <div className="w-[4px]"></div>
            <p className="text-sm">{txt}</p>
        </div>
    );
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
                <Divider />
            </body>
        </html>
    );
};

export async function saveHTML(config: Config, path: string): Promise<void> {
    let readable = renderToStaticNodeStream(<Resume config={config} />);
    let writeable = fs.createWriteStream(path);
    await asyncPipe(readable, writeable);
}

export async function generatePDF(config: Config): Promise<Buffer> {
    const resume = renderToString(<Resume config={config} />);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(resume);
    const pdf = await page.pdf({ format: "letter" });
    await browser.close();
    return pdf;
}

export function savePDF(pdf: Buffer, path: string): void {
    fs.writeFile(path, pdf, (err) => {
        if (err) console.error(err);
    });
}
