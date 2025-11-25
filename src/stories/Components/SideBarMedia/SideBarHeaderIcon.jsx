import React, { useState } from "react";
import "./SideBarHeaderIcon.scss";
import { Icon } from "../Icons";

export const SideBarHeaderIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    console.log(`Sidebar is ${isOpen ? "open" : "closed"}`);

    return (
        <button
            className="storybook--sidebar-header-button"
            onClick={() => setIsOpen(prev => !prev)}
        >
            <Icon
                name={isOpen ? "ic_sidebar_open" : "ic_sidebar_close"}
                className="storybook--sidebar-header-icon"
            />
        </button>
    );
};
