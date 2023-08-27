import { generatePDF, savePDF, saveHTML} from "./src/index"
import config from "resume.config"

Promise.all([
    generatePDF(config).then(savePDF),
    saveHTML(config),
]).then(() => console.log("done!"))
