import React from "react";
import PropTypes from "prop-types";
import "./Tooltip.scss";

export const Tooltip = ({
    label = "This is a tooltip",
    position = "top",
    children,
}) => {
    const placement = ["top", "bottom", "left", "right"].includes(position) ? position : "top";

    return (
        <div className={`storybook-tooltip storybook-tooltip--${placement}`}>
            <div className="storybook-tooltip__trigger">
                {children}
            </div>
            <div className="storybook-tooltip__bubble" role="tooltip">
                {label}
            </div>
        </div>
    );
};

Tooltip.propTypes = {
    label: PropTypes.string,
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    children: PropTypes.node,
};
