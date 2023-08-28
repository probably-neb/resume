import React from "react";

interface DividerProps {
    orientation?: "horizontal" | "vertical";
    lineStyle?: "solid" | "dashed";
    width?: number;
    color?: string;
    className?: string;
}

export default function Divider(props: DividerProps) {
    const defaults: DividerProps = {
        orientation: "horizontal",
        lineStyle: "solid",
        width: 2,
        color: "gray-500",
        className: "",
    };
    const { orientation, lineStyle, width, color, className} = Object.assign(defaults, props);
    let styles = [];
    if (orientation === "vertical") {
        styles.push(`border-r-${width}`);
    } else {
        styles.push("w-full");
        styles.push(`border-b-${width}`);
    }
    if (lineStyle === "dashed") {
        styles.push("border-dashed");
    }
    if (!!color) {
        styles.push(`border-${color}`);
    }
    if (className !== "") {
        styles.push(className);
    }
    return <div className={styles.join(" ")}></div>;
}
