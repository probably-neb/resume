import React, { FC } from "react";
import { Education } from "./config";

const Education: FC<{ edu: Education }> = ({ edu }) => {
    return (
        <div key={edu.name.short} className="flex flex-col items-end">
            <p>{edu.qualification}</p>
            <p className="text-sm">{edu.name.short}</p>
            <div className="flex flex-row text-xs">
                <p className="flex-none">{edu.location}</p>
                <p>|</p>
                <p className="flex-none">{edu.years}</p>
            </div>
        </div>
    );
};
export default Education;
