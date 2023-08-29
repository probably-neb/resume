import { Config, ConfigSchema } from "./src/config";
import { DiHtml5, DiJava, DiLinux } from "react-icons/di";
import { BsGlobe } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import {
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
import { LiaJava } from "react-icons/lia";
import C from "assets/C";

const config: Config = ConfigSchema.parse({
    blurb: "Hi! I'm an aspiring Software Engineer that truly loves to program. I have a keen interest in languages, systems programming, and web development. I use any free time I have on personal projects through which I explore new tools, languages, and ideas.",
    tools: [
        { name: "Vim", icon: SiVim, kind: "tool" },
        { name: "Git", icon: AiFillGithub, kind: "tool" },
        { name: "Linux", icon: DiLinux, kind: "tool" },
        { name: "Vercel", icon: SiVercel, kind: "tool" },
        { name: "NextJS", icon: SiNextdotjs, kind: "framework" },
        { name: "Python", icon: SiPython, kind: "language" },
        { name: "Rust", icon: SiRust, kind: "language" },
        { name: "Typescript", icon: SiTypescript, kind: "language" },
        { name: "Html", icon: DiHtml5, kind: "language" },
        { name: "Java", icon: LiaJava, kind: "language" },
        { name: "C", icon: C, kind: "language" },
        { name: "Lua", icon: SiLua, kind: "language", exclude: true },
        { name: "Go", icon: SiGo, kind: "language" },
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
            icon: AiFillGithub,
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
            skills: ["Leadership", "Responsibility", "Accountability"],
            name: "Camp Towering Pines For Boys",
            type: "Camp Counselor",
            dates: "Summers of 2021, 2022, and 2023",
            short: "Six week overnight camp in Northern Wisconsin.",
            steps: [
                "As a counselor, I was personably responsible for a cabin of 10-15 boys aged 14-16 each summer",
                "Assumed a leadership role at the rifle and trap ranges range where I trained new counselors and taught campers gun safety, maintenence, and form",
            ]
        },
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
            name: "Wave Function Collapse",
            url: "https://wfc-tau.vercel.app",
            type: "Personal Project",
            short: "Implementation of Wave Function Collapse, the constraint based bitmap generation algorithm created by Maxim Gumin.",
            skills: ["Algorithms", "Prototyping", "Haskell", "Rust"],
            steps: [
                "Implemented algorithm in Haskell, as well as Rust.",
                "Extended the original algorithm to process Wang Tiles.",
                "Compiled the Rust implementation to WASM and built a web viewer for the project using SolidJS",
            ],
        },
        {
            name: "Ant Simulation",
            type: "Personal Project",
            url: "https://nebsite.website/modules/ant-sim/index.html",
            short: "Simulating data retreival in peer-to-peer (P2P) networks with a system inspired by ants.",
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
            name: "Smaller Projects",
            type: "",
            skills: ["Solving Problems", "Exploring/Experimenting"],
            short: "I love working and playing with computers and look for excuses to do both.",
            exclude: false,
            steps: [
                "Created Goclone, a cli tool that uses rclone for backing up files to Dropbox to save battery.",
                "Developed a resume generation system using TOML, LaTeX, and Jinja2 to separate formatting and content, allowing for quick iteration, fine-grained control, and versioning through Git.",
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
                "Programming Languages",
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
