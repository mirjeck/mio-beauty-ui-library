import React from "react";
import { Tooltip } from "./Tooltip";

export default {
    title: "Example/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};

const Template = (args) => (
    <Tooltip {...args}>
        <span
            style={{
                display: "inline-block",
                fontFamily: "sans-serif",
                padding: "8px 12px",
                borderRadius: "8px",
                background: "#ececee",
                color: "#131314",
                fontSize: "14px",
                cursor: "pointer",
            }}
        >
            Hover me
        </span>
    </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
    label: "This is a tooltip",
    position: "top",
};

Default.argTypes = {
    position: {
        options: ["top", "bottom", "left", "right"],
        control: { type: "select" },
    },
    label: { control: "text" },
};
