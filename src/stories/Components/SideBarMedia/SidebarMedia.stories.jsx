import React from "react";
import { SideBarMedia } from "./SidebarMedia.jsx";
import { SideBarAvatar } from "./SideBarAvatar.jsx";
import { SideBarHeaderIcon } from "./SideBarHeaderIcon.jsx";
import { SideBarIcon } from "./SideBarIcon.jsx";
import { SideBarEmpty } from "./SideBarEmpty.jsx";
import { SideBarSubMenuItem } from "./SideBarSubMenuItem.jsx";
import { SideBarSubMenu } from "./SideBarSubMenu.jsx";
import { SideBarMenuRow } from "./SideBarMenuRow.jsx";

export default {
    title: "Example/Sidebar",
    parameters: {
        layout: "centered",
    },
};

const MediaTemplate = (args) => <SideBarMedia {...args} />;
export const Media = MediaTemplate.bind({});
Media.args = {
    state: "default",
};
Media.argTypes = {
    state: {
        options: ["default", "focus", "disabled"],
        control: { type: "radio" },
    },
};

const AvatarTemplate = (args) => <SideBarAvatar {...args} />;
export const Avatar = AvatarTemplate.bind({});
Avatar.args = {};

const HeaderIconTemplate = (args) => <SideBarHeaderIcon {...args} />;
export const HeaderIcon = HeaderIconTemplate.bind({});
HeaderIcon.args = {};

const SideBarIconTemplate = (args) => <SideBarIcon {...args} />;
export const SidebarIcon = SideBarIconTemplate.bind({});

SidebarIcon.argTypes = {
    variant: {
        options: ["action", "collapse"],
        control: { type: "radio" },
    },
    type: {
        options: ["horizontal", "vertical", "upDown", "plusMinus"],
        control: { type: "radio" },
        if: { arg: "variant", eq: "collapse" },
    },
};


const EmtypTemplate = (args) => <SideBarEmpty {...args} />;
export const EmtyBar = EmtypTemplate.bind({});

EmtyBar.args = {
    title: "There is no tests yet",
    subtitle: "You haven't created a test yet. Click the button below to create one now.",
    buttonText: "Create new test",
};

EmtyBar.argTypes = {
    title: { control: "text" },
    subtitle: { control: "text" },
    buttonText: { control: "text" },
};


const SideBarMenuItemTemplate = (args) => <SideBarSubMenuItem {...args} />;
export const MenuItem = SideBarMenuItemTemplate.bind({});

MenuItem.args = {
    text: "Sub Menu item",
    disabled: false
};

MenuItem.argTypes = {
    text: { control: "text" },
    disabled: { control: "boolean" }
};

const SideBarSubMenuTemplate = (args) => <SideBarSubMenu {...args} />;
export const SubMenu = SideBarSubMenuTemplate.bind({});

SubMenu.args = {
    items: [
        "Sub Menu item",
        "Sub Menu item",
        "Sub Menu item",
        "Sub Menu item",
        "Sub Menu item",
    ],
    border: true
};

SubMenu.argTypes = {
    items: { control: "object" },
    border: { control: "boolean" }
};

const SideBarMenuRowTemplate = (args) => <SideBarMenuRow {...args} />;


export const MenuRowStates = SideBarMenuRowTemplate.bind({});

MenuRowStates.args = {
    label: "Menu item"
};

MenuRowStates.argTypes = {
    label: { control: "text" }
};
