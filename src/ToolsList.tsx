import React, { FC } from "react";
import { Tool } from "./config";
import { FCNode, Buffer } from "./utils";

const ToolItem: FC<{ tool: Tool }> = ({ tool }) => {
    return (
        <div className="flex flex-row justify-center items-center">
            <FCNode node={tool.icon} /><Buffer width="2px"/>{tool.name}
        </div>
    );
};

interface ToolsListProps {
    tools: Tool[];
}
export default function ToolsList({ tools }: ToolsListProps) {
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
