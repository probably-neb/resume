import React, { FC } from "react";
import { Tool } from "./config";
import { Buffer, Icon, LRDir, LR } from "./utils";
import theme from "./theme";

interface ToolItemProps {
    tool: Tool;
    dir?: LRDir;
}
export const ToolItem: FC<ToolItemProps> = ({ tool, dir }) => {
    dir = dir || "left";
    return (
        <div className="flex flex-row justify-center items-center text-sm">
            <LR
                dir={dir}
                left={<Icon icon={tool.icon} color={theme.accent.hex} />}
                right={<p>{tool.name}</p>}
                middle={<Buffer width="2px" />}
            />
        </div>
    );
};

interface ToolsListProps {
    tools: Tool[];
    dir?: LRDir;
}

export function ToolsList({ tools, dir }: ToolsListProps) {
    return (
        <div className="flex flex-row">
            <div className="flex-shrink">Tools:</div>
            <div className=" flex-grow grid grid-cols-8">
                {tools.map((tool) => (
                    <ToolItem tool={tool} key={tool.name} dir={dir} />
                ))}
            </div>
        </div>
    );
}

export function ToolsList2Col(props: ToolsListProps) {
    let tools = props.tools.map((tool) => (
        <ToolItem tool={tool} key={tool.name} dir={props.dir} />
    ));
    return (
        <div className="grid grid-cols-2 gap-x-8 justify-items-end">
            {tools}
        </div>
    );
}
