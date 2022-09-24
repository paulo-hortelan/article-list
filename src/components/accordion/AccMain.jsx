import React, { useEffect, useState } from "react";
import AccArticleList from "./AccArticleList";
import AccItem from "./AccItem";

export default (props) => {
    const renderItems = () => {
        var sites = props.webCrawlers;
        return sites?.map((site, index) => (
            <AccItem
                key={`AccItem-${index.toString()}`}
                siteNome={site.nome}
                index={index}>
                <AccArticleList
                    key={`AccArticleList-${index.toString()}`}
                    index={index}
                    articles={site.articles}
                    dbArticleList={props.dbArticle.list}
                    handleEdit={props.handleEdit}
                />
            </AccItem>
        ));
    };

    // accordion > items > articles
    return (
        <div className="accordion" id={`accordion${props.index}`}>
            {renderItems()}
        </div>
    );
};
