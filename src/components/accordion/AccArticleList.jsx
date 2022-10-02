import React from "react";
import IconButton from "../IconButton";

export default (props) => {
    const renderRows = () => {
        const articles = props.articles || [];

        return articles.map((article, index) => {
            var exists = props.dbArticleList.some(
                ({ titulo, link }) =>
                    titulo === article.titulo && link === article.link
            );

            return (
                <tr key={index}>
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
                        {exists ? (
                            <IconButton
                                style={"primary disabled"}
                                icon="bookmark"
                                buttonSize="sm"
                                iconSize="1x"></IconButton>
                        ) : (
                            <IconButton
                                style={"outline-primary"}
                                icon={["fa", "bookmark"]}
                                buttonSize="sm"
                                iconSize="1x"
                                onClick={() =>
                                    props.handleAdd(article)
                                }></IconButton>
                        )}
                    </td>
                </tr>
            );
        });
    };

    return (
        <div
            id={`collapse${props.index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${props.index}`}
            data-bs-parent="#accordion"
            style={{
                tableLayout: "fixed",
                overflowY: "scroll",
                overflowX: "auto",
                maxHeight: "300px",
            }}>
            <div className="accordion-body">
                <table className="table">
                    <tbody>{renderRows()}</tbody>
                </table>
            </div>
        </div>
    );
};
