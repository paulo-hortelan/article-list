import React from "react";
import IconButton from "../IconButton";

export default (props) => {
    const renderRows = () => {
        const articles = props.articles || [];

        return articles.map((article) => {
            var exists = props.dbArticleList.some(
                ({ titulo, link }) =>
                    titulo === article.titulo && link === article.link
            );

            return (
                <tr>
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
                                    props.handleEdit(article)
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
            data-bs-parent={`#accordion${props.index}`}>
            <div className="accordion-body">
                <table className="table">
                    <tbody>{renderRows()}</tbody>
                </table>
            </div>
        </div>
    );
};
