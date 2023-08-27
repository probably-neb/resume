import { z } from "zod";

import React from "react";
export type ReactElement = React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
>;

const ContactInfoSchema = z.object({
    value: z.string(),
    icon: z.custom<React.FunctionComponent>(),
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

const ToolSchema = z.object({
    name: z.string(),
    kind: z.enum(["language", "framework", "library", "tool"]),
    icon: z.custom<React.FunctionComponent>(),
    include: z.boolean().optional(),
})

export type Tool = z.infer<typeof ToolSchema>;

export const ConfigSchema = z.object({
    blurb: z.string(),
    tools: z.array(ToolSchema),
    contacts: z.array(ContactInfoSchema),
    projects: z.array(ProjectSchema),
    calpoly: EducationSchema,
});
export type Config = z.infer<typeof ConfigSchema>;


