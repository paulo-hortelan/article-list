import React from "react";
import Grid from "./Grid";
import IconButton from "./IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => {
    return (
        <div role="form" className="container-fluid">
            <div className="row">
                <Grid cols="12 6 6">
                    <div className="row d-flex align-items-center">
                        <Grid cols="1 1 1">
                            <FontAwesomeIcon icon="tag" size="lg" />
                        </Grid>
                        <Grid cols="11 11 11">
                            <input
                                name="titulo"
                                className="form-control"
                                placeholder="Titulo"
                                onChange={props.handleChange}
                                value={props.value.titulo}></input>
                        </Grid>
                    </div>
                </Grid>
                <Grid cols="12 6 6">
                    <div className="row d-flex align-items-center">
                        <Grid cols="1 1 1">
                            <FontAwesomeIcon icon="link" size="lg" />
                        </Grid>
                        <Grid cols="11 11 11">
                            <input
                                name="link"
                                className="form-control"
                                placeholder="Link"
                                onChange={props.handleChange}
                                value={props.value.link}></input>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </div>
    );
};
