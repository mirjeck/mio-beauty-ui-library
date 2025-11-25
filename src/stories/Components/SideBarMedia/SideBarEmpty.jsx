import React from "react";
import PropTypes from "prop-types";
import "./SideBarEmpty.scss";
import { Icon } from "../Icons";
import { Button } from "../NegativeButton/Button"

export const SideBarEmpty = ({
    title = "There is no tests yet",
    subtitle = "You haven't created a test yet. Click the button below to create one now.",
    buttonText = "Create new test"
}) => {


    return (
        <div className="storybook-sidebar-empty-container">
            <Icon name='ic_empty_bar' className="storybook-sidebar-empty-icon" />
            <div className="storybook-sidebar-empty-text-container">
                <p className="storybook-sidebar-empty-text">{title}</p>
                <p className="storybook-sidebar-empty-subtext">{subtitle}</p>
            </div>
            <Button variant="neutral"
                size="extra-small"
                tone="neutral"
                type="secondary"
            >
                <Icon name='ic_add_outlined' className="storybook-sidebar-empty-button-icon" />
                {buttonText && <span className="storybook-sidebar-empty-button-text">{buttonText}</span>}
            </Button>
        </div>
    );
};


SideBarEmpty.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonText: PropTypes.string,
};
