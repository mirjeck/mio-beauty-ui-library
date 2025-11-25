import React from "react";
import PropTypes from "prop-types";
import "./SideBarSubMenuItem.scss";



export const SideBarSubMenuItem = ({
    text = "Menu item",
    disabled = false
}) => {
    return (
        <button
            className={`storybook-sidebar-submenu-item-button
            ${disabled ? "storybook-sidebar-submenu-item-button--disabled" : "storybook-sidebar-submenu-item-button--default"}`}
            disabled={disabled}>
            <p className="storybook-sidebar-submenu-item">{text}</p>
        </button >
    );
};

SideBarSubMenuItem.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool
};
