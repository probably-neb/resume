import { z } from "zod";

const ContactInfoSchema = z.object({
    value: z.string(),
    icon: z.string(),
    href: z.string().url().optional(),
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
    url: z.string().url().optional(),
});
export type Project = z.infer<typeof ProjectSchema>;

const EducationSchema = z.object({
    notable_completed: z.array(z.string()),
    completed: z.array(z.string()),
    current: z.array(z.string()),
});
export type Education = z.infer<typeof EducationSchema>;

export const ConfigSchema = z.object({
    blurb: z.string(),
    languages: z.record(z.string(), z.string()),
    tools: z.record(z.string(), z.string()),
    contacts: z.array(ContactInfoSchema),
    projects: z.array(ProjectSchema),
    calpoly: EducationSchema,
});
export type Config = z.infer<typeof ConfigSchema>;
