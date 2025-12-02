import React from "react";
import PropTypes from "prop-types";
import "./SideBarSubMenu.scss";
import { SideBarSubMenuItem } from "./SideBarSubMenuItem.jsx";

const normalizeItem = (item) => {
    if (typeof item === "string") {
        return { text: item, disabled: false };
    }

    return {
        text: item?.text ?? "Sub Menu item",
        disabled: item?.disabled ?? false
    };
};

export const SideBarSubMenu = ({
    border = true,
    items = [],
}) => {
    const menuItems = items.length ? items : Array(4).fill("Sub Menu item");

    return (
        <div className={`storybook-sidebar-submenu
            ${border ? "storybook-sidebar-submenu--border" : ""}`}>
            {menuItems.map((item, index) => {
                const { text, disabled } = normalizeItem(item);
                return (
                    <SideBarSubMenuItem
                        key={`${text}-${index}`}
                        text={text}
                        disabled={disabled}
                    />
                );
            })}
        </div>
    );
};

SideBarSubMenu.propTypes = {
    border: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                text: PropTypes.string,
                disabled: PropTypes.bool
            })
        ])
    )
};
