import React from "react";

export default (props) => {
    return (
        <div key={props.index} className="accordion-item">
            <h2 className="accordion-header" id={`heading${props.index}`}>
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${props.index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${props.index}`}>
                    {props.siteNome}
                </button>
            </h2>
            {props.children}
        </div>
    );
};
