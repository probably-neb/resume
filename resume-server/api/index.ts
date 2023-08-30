export const config = {
    runtime: "edge",
};

const owner = "probably-neb";
const repo = "resume";

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
            "content-type": mime,
            // FIXME: change to only allow my sites
            "access-control-allow-origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
}
export default async function handler(req: Request) {
    const filetype = new URL(req.url).searchParams.get("filetype");
    if (!filetype) {
        return new Response("No filetype specified", { status: 400 });
    }
    switch (filetype) {
        case "pdf":
            return getGHReleaseAsset("resume.pdf", "application/pdf");
        case "html":
            return getGHReleaseAsset("resume.html", "text/html");
        default:
            return new Response("Invalid filetype", { status: 400 });
    }
}
