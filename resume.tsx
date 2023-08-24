import React, { FC } from "react";
import ReactPDF, { Document, Page, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import {
    loadConfig,
    Config,
    ContactInfo,
    Education,
    Project,
} from "./src/config";

const tw = createTw({
    theme: {
        fontFamily: {},
        extend: {
            colors: {},
        },
    },
});


interface DividerProps {}
const Divider: FC<DividerProps> = () => {
    return <div className="w-full border-b-2 border-gray-100 my-4"></div>;
};

interface ContactInfoProps {
    info: ContactInfo;
}

const ContactInfo: FC<ContactInfoProps> = ({ info }) => {
    return <Text>{info.pretty ?? info.val}</Text>;
};

interface ContactInfoListProps {
    infos: ContactInfo[];
}

const ContactInfoList: FC<ContactInfoListProps> = ({ infos }) => {
    return (
        <View style={tw("flex flex-row")}>
            {infos.map((info) => (
                <ContactInfo info={info} key={info.val} />
            ))}
        </View>
    );
};

interface ResumeProps {
    config: Config;
}

const Resume: FC<ResumeProps> = ({ config }) => {
    return (
        <Document>
            <Page style={tw("m-[0.25in]")}>
                <View style={tw("flex flex-col")}>
                    <Text style={tw("text-4xl text-center")}>Ben Kunkle</Text>
                    <ContactInfoList infos={config.header_info} />
                </View>
                <Divider />
            </Page>
        </Document>
    );
};

const config = loadConfig();
ReactPDF.render(<Resume config={config} />, "resume.pdf");
