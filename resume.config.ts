import { Config, ConfigSchema } from "./src/config";
import { DiGithub, DiHtml5, DiJava, DiLinux } from "react-icons/di";
import { BsGlobe } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import {
    SiCmake,
    SiGo,
    SiLua,
    SiNextdotjs,
    SiPython,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiVim,
} from "react-icons/si";

const config: Config = ConfigSchema.parse({
    blurb: "Hi! I'm an asipiring Software Engineer that truly loves to program. I have a keen interest in languages, systems programming, and web development. I use any free time I have on personal projects through which I explore new tools, languages, and ideas.",
    tools: [
        { name: "vim", icon: SiVim, kind: "tool" },
        { name: "Git", icon: AiFillGithub, kind: "tool" },
        { name: "Linux", icon: DiLinux, kind: "tool" },
        { name: "Vercel", icon: SiVercel, kind: "tool" },
        { name: "NextJS", icon: SiNextdotjs, kind: "framework" },
        { name: "Python", icon: SiPython, kind: "language" },
        { name: "Rust", icon: SiRust, kind: "language" },
        { name: "Typescript", icon: SiTypescript, kind: "language" },
        { name: "Html", icon: DiHtml5, kind: "language" },
        { name: "Java", icon: DiJava, kind: "language" },
        { name: "C", icon: SiCmake, kind: "language" },
        { name: "Go", icon: SiGo, kind: "language" },
        { name: "Lua", icon: SiLua, kind: "language", exclude: true },
        { name: "TailwindCSS", icon: SiTailwindcss, kind: "framework" },
    ],
    contacts: [
        {
            value: "(847) 848-8813",
            icon: AiFillPhone,
        },

        {
            value: "ben.kunkle@gmail.com",
            icon: HiMail,
            href: "mailto:ben.kunkle@gmail.com",
        },

        {
            value: "probably-neb",
            icon: DiGithub,
            href: "https://github.com/probably-neb",
        },

        {
            value: "nebsite.website",
            icon: BsGlobe,
            href: "https://nebsite.website",
        },

        {
            value: "benjamin-kunkle",
            icon: AiFillLinkedin,
            href: "https://www.linkedin.com/in/benjamin-kunkle/",
        },
    ],
    projects: [
        {
            name: "Millipyde",
            skills: ["Team Work", "Collaboration"],
            type: "Research Project",
            url: "https://digitalcommons.calpoly.edu/theses/2374/",
            short: "Benchmarks of a GPU-backed array library for python",
            steps: [
                "Worked with a partner to develop benchmarks for Millipyde, a library that uses AMD ROCm to add GPU-backed arrays to python.",
                "Compared the benchmarks against similar tools CuPy and OpenCV-cuda",
            ],
        },

        {
            name: "Ant Simulation",
            type: "Personal Project",
            url: "https://nebsite.website/modules/ant-sim/index.html",
            short: "Simulating data retreival in peer-to-peer (P2P) networks with a system inspired by ants",
            skills: [
                "Algorithms",
                "Rust",
                "Game Dev",
                "Simulation",
                "Research",
            ],
            steps: [
                "Conducted research on P2P networks inspired by ant pheromone systems and developed a visual simulation of the algorithm.",
                "Developed a toolkit for benchmarking the program after each improvement to measure and verify progress",
                "Created a comprehensive report documenting the research and design process, including a live demonstration of the program using WebAssembly.",
            ],
        },

        {
            name: "Wave Function Collapse",
            url: "https://wfc-tau.vercel.app",
            type: "Personal Project",
            short: "Implementation of Wave Function Collapse, the constraint based bitmap generation algorithm created by Maxim Gumin.",
            skills: ["Algorithms", "Prototyping", "Haskell", "Rust"],
            steps: [
                "Implemented algorithm in Haskell, as well as Rust.",
                "Extended the original algorithm to process wang tiles.",
                "Compiled the Rust implementation to WASM and built a web viewer for the project using SolidJS",
            ],
        },
        {
            skills: ["Leadership", "Responsibility", "Accountability"],
            name: "Camp Towering Pines For Boys",
            type: "Camp Counselor",
            dates: "Summers of 2021, 2022, and 2023",
            short: "Six week overnight camp in Northern Wisconsin. I was personably responsible for a cabin of 10-15 boys aged 14-16 each summer.",
        },

        {
            name: "Smaller Projects",
            type: "Personal Projects",
            skills: ["Solving Problems", "Exploring/Experimenting"],
            short: "I love working and playing with computers and look for excuses to do both",
            exclude: true,
            steps: [
                "Created Goclone, a cli tool that uses rclone for backing up files to Dropbox to save battery.",
                "Developed a resume generation system using TOML, LaTeX, and Jinja2 to separate formatting and content, allowing for quick iteration, fine-grained control, and versioning.",
                "Enjoyed college course on Systems Programming, where projects were built from scratch in C, including a word frequency counter using a trie, Huffman encoding/decoding and simplified versions of GNU Tar, Talk, and Uniq.",
            ],
        },
    ],

    education: [
        {
            name: {
                short: "Cal Poly",
                long: "California Polytechnic State University",
            },
            kind: "University",
            location: "San Luis Obispo",
            qualification: "B.S. Computer Science",
            years: "2021 - Present",
            notable_completed: [
                "Data Structures",
                "Computer Architecture",
                "Systems Programming",
                "Algorithms",
                "Proj-Based Obj-Oriented Programming and Design",
                "Programming Languages",
                "Theory of Computation",
            ],
            completed: [
                "Data Structures",
                "Proj-Based Obj-Oriented Programming and Design",
                "Computer Architecture",
                "Systems Programming",
                "Introduction to Computer Organization",
                "Discrete Structures",
                "Design and Analysis of Algorithms",
            ],
            current: [
                "Intro to Computer Security",
                "Knowledge Discovery from Data",
                "Graph Theory",
                "Intro to Hardware Security",
            ],
        },
    ],
});

export default config;
