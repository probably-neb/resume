import { generatePDF, savePDF, saveHTML } from "./src/index";
import config from "resume.config";
import {
    command,
    run,
    string,
    positional,
    option,
    optional,
} from "cmd-ts";

const cmd = command({
    name: "resume",
    description: "Generate resume from config",
    args: {
        config_path: positional({ type: string }),
        pdf_path: option({ long: "pdf", type: optional(string) }),
        html_path: option({ long: "html", type: optional(string) }),
    },
    handler: async ({ config_path, pdf_path, html_path }) => {
        let { default: config } = await import(config_path);
        console.dir(config, { depth: null });
        let jobs = [];
        if (pdf_path) {
            console.log("saving pdf to ", pdf_path);
            jobs.push(
                generatePDF(config)
                    .then((pdf_buf) => savePDF(pdf_buf, pdf_path))
                    .then(() => console.log("saved pdf to", pdf_path))
            );
        }
        if (html_path) {
            jobs.push(
                saveHTML(config, html_path).then(() =>
                    console.log("saved html to", html_path)
                )
            );
        }
        await Promise.all(jobs);
    },
});

run(cmd, process.argv.slice(2));
