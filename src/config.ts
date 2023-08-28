import React from "react";
import { z } from "zod";
import { IconType } from "react-icons";
const IconSchema = z.custom<IconType>();


export type ReactElement = React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
>;

const ContactInfoSchema = z.object({
    value: z.string(),
    icon: IconSchema,
    href: z.string().url().optional(),
});
export type ContactInfo = z.infer<typeof ContactInfoSchema>;

const ProjectSchema = z.object({
    name: z.string(),
    short: z.string(),
    include: z.boolean().optional(),
    skills: z.array(z.string()).optional(),
    dates: z.string().optional(),
    steps: z.array(z.string()).optional(),
    type: z.string().optional(),
    url: z.string().url().optional(),
});
export type Project = z.infer<typeof ProjectSchema>;


const ToolSchema = z.object({
    name: z.string(),
    kind: z.enum(["language", "framework", "library", "tool"]),
    icon: IconSchema,
    include: z.boolean().optional(),
})
export type Tool = z.infer<typeof ToolSchema>;

const EducationSchema = z.object({
    name: z.object({
        short: z.string(),
        long: z.string(),
    }),
    kind: z.string(),
    location: z.string(),
    years: z.string(),
    qualification: z.string(),
    notable_completed: z.array(z.string()),
    completed: z.array(z.string()),
    current: z.array(z.string()),
});
export type Education = z.infer<typeof EducationSchema>;

export const ConfigSchema = z.object({
    blurb: z.string(),
    tools: z.array(ToolSchema),
    contacts: z.array(ContactInfoSchema),
    projects: z.array(ProjectSchema),
    education: z.array(EducationSchema),
});
export type Config = z.infer<typeof ConfigSchema>;
