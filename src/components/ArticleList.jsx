import React from "react";
import IconButton from "./IconButton";

export default (props) => {
    const renderRows = () => {
        const list = props.list || [];

        return list.map((article) => (
            <tr key={article.id}>
                <td>{article.titulo}</td>
                <td>
                    <a
                        href={article.link}
                        target="_blank"
                        style={{ color: "#384355" }}>
                        {article.link}
                    </a>
                </td>
                <td>
                    <div className="d-flex justify-content-around align-items-center">
                        <IconButton
                            style="primary"
                            buttonSize="sm"
                            icon="pencil"
                            onClick={() =>
                                props.handleEdit(article)
                            }></IconButton>
                        <IconButton
                            style="secondary"
                            buttonSize="sm"
                            icon="trash"
                            onClick={() =>
                                props.handleDelete(article)
                            }></IconButton>
                    </div>
                </td>
            </tr>
        ));
    };

    return (
        <div
            className="table-responsive"
            style={{
                tableLayout: "fixed",
                overflowY: "scroll",
                overflowX: "auto",
                maxHeight: "500px",
            }}>
            <table className="table table-hover">
                <thead className="table-secondary">
                    <tr>
                        <th>Titulo</th>
                        <th>Link</th>
                        <th className="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>{renderRows()}</tbody>
            </table>
        </div>
    );
};
