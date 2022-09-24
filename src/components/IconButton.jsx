import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import If from "../helpers/If";

export default (props) => {
    return (
        <If test={!props.hide}>
            <button
                className={
                    "btn btn-" + props.style + " btn-" + props.buttonSize
                }
                onClick={props.onClick}>
                <FontAwesomeIcon
                    icon={props.icon}
                    size={props.iconSize || "1x"}
                />
            </button>
        </If>
    );
};
