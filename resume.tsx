import React, { FC } from "react";
import { renderToString } from "react-dom/server";
import ReactPDF, { Document, Page, Text, View } from "@react-pdf/renderer";
import fs from "fs";
import toml from "toml";
import { z } from "zod";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
    theme: {
        fontFamily: {},
        extend: {
            colors: {},
        },
    },
});

const ContactInfoSchema = z.object({
    val: z.string(),
    icon: z.string(),
    pretty: z.string().optional(),
    href: z.boolean().optional(),
});
type ContactInfo = z.infer<typeof ContactInfoSchema>;

const ProjectSchema = z.object({
    name: z.string(),
    short: z.string(),
    exclude: z.boolean().optional(),
    skills: z.array(z.string()).optional(),
    dates: z.string().optional(),
    steps: z.array(z.string()).optional(),
    type: z.string().optional(),
});
type Project = z.infer<typeof ProjectSchema>;

const EducationSchema = z.object({
    notable_completed: z.array(z.string()),
    completed: z.array(z.string()),
    current: z.array(z.string()),
});
type Education = z.infer<typeof EducationSchema>;

const ConfigSchema = z.object({
    languages: z.record(z.string(), z.string()),
    tools: z.record(z.string(), z.string()),
    header_info: z.array(ContactInfoSchema),
    projects: z.array(ProjectSchema),
    calpoly: EducationSchema,
});
type Config = z.infer<typeof ConfigSchema>;

interface DividerProps {}
const Divider: FC<DividerProps> = () => {
    return <div className="w-full border-b-2 border-gray-100 my-4"></div>;
};

interface ContactInfoProps {
    info: ContactInfo;
}

const ContactInfo: FC<ContactInfoProps> = ({ info }) => {
    return <Text>{info.pretty ?? info.val}</Text>;
};

interface ContactInfoListProps {
    infos: ContactInfo[];
}

const ContactInfoList: FC<ContactInfoListProps> = ({ infos }) => {
    return (
        <View style={tw("flex flex-row")}>
            {infos.map((info) => (
                <ContactInfo info={info} key={info.val} />
            ))}
        </View>
    );
};

interface ResumeProps {
    config: Config;
}

const Resume: FC<ResumeProps> = ({ config }) => {
    return (
        <Document>
            <Page style={tw("m-[0.25in]")}>
                <View style={tw("flex flex-col")}>
                    <Text style={tw("text-4xl text-center")}>Ben Kunkle</Text>
                    <ContactInfoList infos={config.header_info} />
                </View>
                <Divider />
            </Page>
        </Document>
    );
};

const loadConfig = (): Config => {
    let raw = fs.readFileSync("info.toml");
    const config = toml.parse(raw.toString("utf-8"));
    return ConfigSchema.parse(config);
};

const config = loadConfig();
ReactPDF.render(<Resume config={config} />, "resume.pdf");
