export const config = {
    runtime: "edge",
};

const owner = "probably-neb";
const repo = "resume";
const SUPPORTED_FILETYPES = ["pdf", "html"];

async function getGHReleaseAsset(pattern: string, mime: string) {
    const asset_id = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/releases/latest`
    )
        .then((res) => res.json())
        .then((res) => res.assets.find((asset) => asset.name === pattern)!.id);

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
            "Content-Type": mime,
            // FIXME: change to only allow my sites
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "*",
        },
    });
}

export default async function handler(req: Request) {
    console.log(new URL(req.url).pathname);
    const reqPath = new URL(req.url).pathname;
    const filename = reqPath.split("/").pop();
    console.log(filename);
    const filetype = reqPath.split(".").pop();
    if (!filetype) {
        return new Response("No filetype specified", { status: 400 });
    }
    if (!SUPPORTED_FILETYPES.includes(filetype)) {
        return new Response(
            "Invalid filetype. Supported Filetypes are: " +
                SUPPORTED_FILETYPES.join(", "),
            { status: 400 }
        );
    }
    const mimetype = `${
        filetype === "pdf" ? "application" : "text"
    }/${filetype}`;
    return getGHReleaseAsset(filename, mimetype);
}
