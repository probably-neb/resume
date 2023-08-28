import React from "react";

interface DividerProps {
    orientation?: "horizontal" | "vertical";
    lineStyle?: "solid" | "dashed";
    width?: number;
}

export default function Divider(props: DividerProps) {
    const defaults: DividerProps = {
        orientation: "horizontal",
        lineStyle: "solid",
        width: 2,
    };
    const { orientation, lineStyle, width } = Object.assign(defaults, props);
    let styles = ["border-gray-500"];
    if (orientation === "vertical") {
        styles.push(`border-r-${width}`);
    } else {
        styles.push("w-full");
        styles.push(`border-b-${width}`);
    }
    if (lineStyle === "dashed") {
        styles.push("border-dashed");
    }
    return <div className={styles.join(" ")}></div>;
}
