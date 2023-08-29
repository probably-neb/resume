import React, { FC } from "react";
import { Education } from "./config";
import theme from "./theme";

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
            <div className="text-xs flex flex-col items-end my-4">
                <p className={`text-${theme.accent.tw}`}><b><u>Relevant Courses</u></b></p>{edu.notable_completed.map((c) => <p key={c}>{c}</p>)}
            </div>
        </div>
    );
};
export default Education;
