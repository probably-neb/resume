import React, { FC } from "react";
import { renderToString } from "react-dom/server";
import puppeteer from "puppeteer";
import fs from "fs";
import toml from "toml";
import {z} from "zod";

const ContactInfoSchema = z.object({
    val: z.string(),
    icon: z.string(),
    pretty: z.string().optional(),
    href: z.boolean().optional(),
})
type ContactInfo = z.infer<typeof ContactInfoSchema>

const ProjectSchema = z.object({
    name: z.string(),
    short: z.string(),
    exclude: z.boolean().optional(),
    skills: z.array(z.string()).optional(),
    dates: z.string(),
    steps: z.array(z.string()),
    type: z.string().optional(),
})
type Project = z.infer<typeof ProjectSchema>

const EducationSchema = z.object({
    notable_completed: z.array(z.string()),
    completed: z.array(z.string()),
    current: z.array(z.string()),
})
type Education = z.infer<typeof EducationSchema>

const ConfigSchema = z.object({
    languages: z.record(z.string(), z.string()),
    tools: z.record(z.string(), z.string()),
    header_info: z.array(ContactInfoSchema),
    projects: z.array(ProjectSchema),
    calpoly: EducationSchema,
})
type Config = z.infer<typeof ConfigSchema>

interface DividerProps {}
const Divider: FC<DividerProps> = () => {
    return <div className="w-full border-b-2 border-gray-100 my-4"></div>;
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
                {JSON.stringify(config)}
            </body>
        </html>
    );
};

const loadConfig = (): Config => {
    let raw = fs.readFileSync("info.toml");
    const config = toml.parse(raw.toString('utf-8'))
    return ConfigSchema.parse(config);
}

async function generatePDFPuppeteer(): Promise<Buffer> {
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
