import { z } from "zod";
import fs from "fs";
import toml from "toml";

const ContactInfoSchema = z.object({
    val: z.string(),
    icon: z.string(),
    pretty: z.string().optional(),
    href: z.boolean().optional(),
});
export type ContactInfo = z.infer<typeof ContactInfoSchema>;

const ProjectSchema = z.object({
    name: z.string(),
    short: z.string(),
    exclude: z.boolean().optional(),
    skills: z.array(z.string()).optional(),
    dates: z.string().optional(),
    steps: z.array(z.string()).optional(),
    type: z.string().optional(),
});
export type Project = z.infer<typeof ProjectSchema>;

const EducationSchema = z.object({
    notable_completed: z.array(z.string()),
    completed: z.array(z.string()),
    current: z.array(z.string()),
});
export type Education = z.infer<typeof EducationSchema>;

const ConfigSchema = z.object({
    languages: z.record(z.string(), z.string()),
    tools: z.record(z.string(), z.string()),
    header_info: z.array(ContactInfoSchema),
    projects: z.array(ProjectSchema),
    calpoly: EducationSchema,
});
export type Config = z.infer<typeof ConfigSchema>;

export const loadConfig = (): Config => {
    let raw = fs.readFileSync("info.toml");
    const config = toml.parse(raw.toString("utf-8"));
    return ConfigSchema.parse(config);
};
