import React, { FC } from "react";
import { Tool } from "./config";
import { FCNode, Buffer, Icon } from "./utils";
import theme from "./theme";

export const ToolItem: FC<{ tool: Tool }> = ({ tool }) => {
    return (
        <div className="flex flex-row justify-center items-center">
            <Icon icon={tool.icon} color={theme.accent.hex}/><Buffer width="2px"/>{tool.name}
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
