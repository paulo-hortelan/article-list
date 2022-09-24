import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Grid from "./Grid";
import IconButton from "./IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default (props) => {
    return (
        <div role="form" className="container-fluid">
            <div className="row">
                <Grid cols="12 5 6">
                    <div className="row d-flex align-items-center">
                        <Grid cols="1 1 1">
                            <FontAwesomeIcon icon="tag" size="lg" />
                        </Grid>
                        <Grid cols="11 11 11">
                            <input
                                id="titulo"
                                name="titulo"
                                className="form-control"
                                placeholder="Titulo"
                                onChange={props.handleChange}
                                value={props.article.titulo}></input>
                        </Grid>
                    </div>
                </Grid>
                <Grid cols="12 5 5">
                    <div className="row d-flex align-items-center">
                        <Grid cols="1 1 1">
                            <FontAwesomeIcon icon="link" size="lg" />
                        </Grid>
                        <Grid cols="11 11 11">
                            <input
                                id="link"
                                name="link"
                                className="form-control"
                                placeholder="Link"
                                onChange={props.handleChange}
                                value={props.article.link}></input>
                        </Grid>
                    </div>
                </Grid>
                <Grid cols="12 2 1">
                    <div className="text-center">
                        <IconButton
                            style="success"
                            icon="plus"
                            onClick={props.handleAdd}></IconButton>
                    </div>
                </Grid>
            </div>
        </div>
    );
};
