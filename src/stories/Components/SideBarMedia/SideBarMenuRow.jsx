import React from "react";
import PropTypes, { func } from "prop-types";
import "./SideBarMenuRow.scss";
import { SideBarIcon } from "./SideBarIcon";

export const SideBarMenuRow = ({
    label = "Menu item",
}) => {

    return (
        <div className="storybook-sidebar-menu-row" onClick={handleClick}>
            <span className="storybook-sidebar-menu-row__label">{label}</span>
            <div className="storybook-sidebar-menu-row__actions">
                <SideBarIcon variant="collapse" type="vertical" className="storybook-sidebar-menu-row__collapse-icon" />
                <SideBarIcon />
            </div>
        </div>
    );
};

SideBarMenuRow.propTypes = {
    label: PropTypes.string,
};
