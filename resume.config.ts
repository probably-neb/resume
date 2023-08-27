import { Config, ConfigSchema} from "./src/config";
import { DiGithub } from "react-icons/di"
import { BsGlobe } from "react-icons/bs"
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai"
import { HiMail } from "react-icons/hi"

const config: Config = ConfigSchema.parse({
    blurb: "Hi! I'm an asipiring Software Engineer that truly loves to program. I love languages, systems programming, and web development. I use any free time I have on personal projects through which I explore new tools, languages, and ideas.",
    tools: [
        { name: "vim", icon: "", kind: "tool" },
        { name: "Git", icon: "", kind: "tool" },
        { name: "Linux", icon: "", kind: "tool" },
        { name: "Vercel", icon: "△", kind: "tool" },
        { name: "NextJS", icon: "△", kind: "framework" },
        { name: "Python", icon: "", kind: "language" },
        { name: "Rust", icon: "", kind: "language" },
        { name: "Typescript", icon: "", kind: "language" },
        { name: "Html", icon: "", kind: "language" },
        { name: "Java", icon: "", kind: "language" },
        { name: "C", icon: "", kind: "language" },
        { name: "Go", icon: "", kind: "language" },
        { name: "Lua", icon: "", kind: "language" },
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
            exclude: false,
            skills: ["Team Work", "Collaboration"],
            type: "Research Project",
            url: "https://digitalcommons.calpoly.edu/theses/2374/",
            short: "Worked with a partner to develop benchmarks for Millipyde, a library that uses AMD ROCm to add GPU-backed arrays to python. Compared the benchmarks against similar tools CuPy and OpenCV-cuda",
        },

        {
            name: "Ant Simulation",
            type: "Personal Project",
            url: "https://nebsite.website/modules/ant-sim/index.html",
            short: "Simulating date retreival in peer-to-peer (P2P) networks with a system inspired by ants",
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
            steps: [
                "Created Goclone, a cli tool that uses rclone for backing up files to Dropbox to save battery.",
                "Developed a resume generation system using TOML, LaTeX, and Jinja2 to separate formatting and content, allowing for quick iteration, fine-grained control, and versioning.",
                "Enjoyed college course on Systems Programming, where projects were built from scratch in C, including a word frequency counter using a trie, Huffman encoding/decoding and simplified versions of GNU Tar, Talk, and Uniq.",
            ],
        },
    ],

    calpoly: {
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
});

export default config;
