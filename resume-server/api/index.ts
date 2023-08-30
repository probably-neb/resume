import { Octokit } from "octokit";

export const config = {
    runtime: "edge",
};

if (process.env.VERCEL_ENV === "development") {
    // dotenv.config();
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const owner = "probably-neb";
const repo = "resume";


export default async function handler() {
// export default async function handler(req: Request) {
    // console.log(new URL(req.url).searchParams.get("filetype"))
    const asset_id = await octokit.rest.repos
        .getLatestRelease({ owner, repo })
        .then(
            (res) =>
                res.data.assets.find((asset) => asset.name === "resume.pdf")!.id
        );

    const file = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/releases/assets/${asset_id}`,
        {
            headers: {
                authorization: `token ${process.env.GITHUB_TOKEN}`,
                accept: "application/octet-stream",
                "X-GitHub-Api-Version": "2022-11-28",
            },
        }
    );
    return new Response(file.body, {
        headers: {
            "content-type": "application/pdf",
            "access-control-allow-origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            // "content-disposition": "attachment; filename=resume.pdf"
        },
    });
}
