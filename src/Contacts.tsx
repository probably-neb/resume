import React, { FC } from "react";
import { ContactInfo, ReactElement } from "./config";
import { Icon } from "./utils";

export const ContactItem: FC<{ info: ContactInfo }> = ({ info }) => {
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
            <Icon icon={info.icon} />
            <div className="w-[4px]"></div>
            <p className="text-sm">{txt}</p>
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
