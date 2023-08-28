import colors from "tailwindcss/colors";

type Colors = keyof typeof colors;

type ColorShade<T extends Colors> = keyof typeof colors[T]

function get_hex<T extends Colors>(color: T, shade: ColorShade<T>) {
    const hex = colors[color][shade];
    console.log("accent:", hex);
    return hex;
};

function make_accent<T extends Colors>(color: T, shade: ColorShade<T>) {
    return {
        tw: `${String(color)}-${String(shade)}`,
        hex: get_hex(color, shade),
    };
};

const theme = {
    accent: make_accent("rose", "800"),
}

export default theme;
