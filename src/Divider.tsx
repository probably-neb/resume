import React from "react";

interface DividerProps {
    orientation?: "horizontal" | "vertical"
    lineStyle?: "solid" | "dashed"
}

export default function Divider({orientation, lineStyle}: DividerProps) {
    orientation = orientation ?? "horizontal";
    lineStyle = lineStyle ?? "solid";
    let styles = ["border-b-2", "border-gray-500"];
    if (orientation === "vertical") {
        styles.push("h-full")
    } else {
        styles.push("w-full")
    }
    if (lineStyle === "dashed") {
        styles.push("border-dashed")
    }
    return (
        <div className={styles.join(" ")}></div>
    );
};
