import React from "react";
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

import Resume from "./Resume";

import util from "util";
import stream from "stream";
const asyncPipe = util.promisify(stream.pipeline);

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
