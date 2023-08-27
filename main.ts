import { generatePDF, savePDF, saveHTML} from "./src/index"
import config from "resume.config"
import { command, run, string, number, positional, option} from "cmd-ts"

const cmd = command({
    name: "resume",
    description: "Generate resume from config",
    args: {
        config_path: positional({type: string}),
        pdf_path: option({long: "pdf", type: string}),
        html_path: option({long: "html", type: string}),
    },
    handler: ({config_path, pdf_path, html_path}) => {
        let config = require(config_path)
        Promise.all([
            generatePDF(config).then((pdf_buf) => savePDF(pdf_buf, pdf_path)),
            saveHTML(config, html_path),
        ]).then(() => console.log("done!"))

    },
})

