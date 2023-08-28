import React, { FC, ReactNode } from 'react';
import { IconContext, type IconContext as IconContextType, IconType } from 'react-icons';

const FCNodeString: FC<{str: string}> = ({str}) => {
    return str
}

interface FCNodeProps {
    node: React.FunctionComponent;
}

export const FCNode: FC<FCNodeProps> = ({ node }) => {
    if (typeof node === "string") {
        return (<FCNodeString str={node} />)
    }
    const Element = node;
    return (<Element />)
}

interface IconProps extends IconContextType {
    icon: IconType;
}

export const Icon: FC<IconProps> = ({ icon: Icon, color, size}) => {
    return <Icon color={color} size={size} />
}

export const Buffer: FC<{width?: string, height?: string}> = ({width, height}) => {
    return <div style={{width, height}}></div>
}

export type LRDir = "left" | "right";

interface LRProps {
    dir: LRDir;
    left: ReactNode;
    right: ReactNode;
    middle?: ReactNode;
}

export const LR: FC<LRProps> = ({dir, left, right, middle}) => {
    return <>
        {dir === "left" ? left : right}
        {middle}
        {dir === "left" ? right : left}
    </>;
}
