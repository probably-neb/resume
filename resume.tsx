import React, {FC} from "react";
import {renderToString } from "react-dom/server";
import puppeteer from 'puppeteer';
import fs from 'fs';


interface DividerProps {
}
const Divider: FC<DividerProps> = () => {
    return <div className="w-full border-b-2 border-gray-100 my-4"></div>
}

const Resume: FC = () => {
    return <html>
        <head>
        <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body style={{"width": "8.5in", "height": "11in"}} className="">
            <div className="flex justify-center">
                <p className="text-4xl">Ben Kunkle</p>
            </div>
            <Divider />
        </body>
    </html>
}

async function generatePDFPuppeteer(): Promise<Buffer> {
    const resume = renderToString(<Resume/>);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(resume);
    const pdf = await page.pdf({format: 'letter'});
    await browser.close();
    return pdf;
}

generatePDFPuppeteer().then((pdf) => {
    fs.writeFile('resume.pdf', pdf, console.error);
});
console.log("done");
