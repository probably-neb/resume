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
        <div className="flex flex-row justify-center items-center">
            <LR dir={dir} left={<Icon icon={tool.icon} color={theme.accent.hex} />} right={<p>{tool.name}</p>} middle={<Buffer width="2px" />} />
        </div>
    );
};

interface ToolsListProps {
    tools: Tool[];
}

export function ToolsList({ tools }: ToolsListProps) {
    return (
            <div className="flex flex-row">
            <div className="flex-shrink">
            Tools:
            </div>
        <div className=" flex-grow grid grid-cols-8">
            {tools.map((tool) => (
                <ToolItem tool={tool} key={tool.name} />
            ))}
        </div></div>
    );
}
