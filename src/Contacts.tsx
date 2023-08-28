import React, { FC } from "react";
import { ContactInfo, ReactElement } from "./config";
import { Icon, LRDir, LR, Buffer} from "./utils";
import theme from "./theme";

interface ContactItemProps {
    info: ContactInfo;
    dir?: LRDir;
}
export const ContactItem: FC<ContactItemProps> = ({ info, dir }) => {
    dir = dir || "left";
    let txt: ReactElement | string = info.value;
    if (info.href) {
        txt = (
            <a href={info.href} target="_blank">
                {txt}
            </a>
        );
    }
    return (
        <div className="flex flex-row justify-center items-center">
            <LR
                dir={dir}
                left={<Icon icon={info.icon} color={theme.accent.hex} />}
                right={<p className="text-sm">{txt}</p>}
                middle={<Buffer width="4px" />}
            />
        </div>
    );
};

export const ContactInfoList: FC<{ infos: ContactInfo[] }> = ({ infos }) => {
    return (
        <div className="flex flex-row justify-between">
            {infos.map((info) => (
                <ContactItem info={info} key={info.value} />
            ))}
        </div>
    );
};
