import React, { useState } from "react";
import "./SideBarIcon.scss";
import PropTypes from "prop-types";
import { Icon } from "../Icons";

export const SideBarIcon = ({
    variant = "action",
    type = "horizontal",
}) => {

    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        if (variant === "collapse") {
            setToggled((prev) => !prev);
        }
    };

    const getIconName = () => {
        if (variant === "action") {
            return "ic_add_outlined";
        }

        switch (type) {
            case "horizontal":
                return toggled ? "ic_down" : "ic_top";

            case "vertical":
                return toggled ? "ic_up" : "ic_down";

            case "upDown":
                return toggled
                    ? "ic_collapsed_horizontal"
                    : "ic_collapsed_horizontal";

            case "plusMinus":
                return toggled ? "ic_minus" : "ic_add_outlined";

            default:
                return null;
        }
    };

    return (
        <button className="storybook--sidebar-icon-button" onClick={handleClick}>
            <Icon name={getIconName()} className="storybook--sidebar-icon" />
        </button>
    );
};

SideBarIcon.propTypes = {
    variant: PropTypes.oneOf(["action", "collapse"]),
    type: PropTypes.oneOf([
        "horizontal",
        "vertical",
        "upDown",
        "plusMinus",
        null
    ])
};
