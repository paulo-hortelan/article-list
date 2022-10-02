import React, { useEffect, useState } from "react";
import AccMain from "../components/accordion/AccMain";
import {
    getWebCrawlersList,
    getWebCrawlerArticles,
} from "../services/WCrawler";

import { getArticles, addArticle } from "../services/ArticleService";

import { isValidHttpUrl } from "../helpers/Util";
import If from "../helpers/If";

export default (props) => {
    const [dbArticle, setDbArticle] = useState({
        titulo: "",
        link: "",
        list: [],
    });

    const [webCrawlers, setWebCrawlers] = useState([]);

    useEffect(() => {
        getWebCrawlers().then(() => getDbArticles());
    }, []);

    const getDbArticles = () => {
        getArticles().then((resp) => {
            setDbArticle({
                ...dbArticle,
                titulo: "",
                link: "",
                list: resp,
            });
        });
    };

    const updateWebCrawlers = (nome, articles) => [
        ...webCrawlers,
        {
            nome: nome,
            articles: articles,
        },
    ];

    async function getWcArticles(siteNome) {
        return await getWebCrawlerArticles(siteNome);
    }

    async function getWebCrawlers() {
        const list = await getWebCrawlersList();
        var wcObj = [];

        for (let item of list) {
            let articles = await getWcArticles(item.nome);
            wcObj.push({ nome: item.nome, articles: articles });
        }

        setWebCrawlers((prev) => [...prev, ...wcObj]);
    }

    function handleAdd(article) {
        const isLink = isValidHttpUrl(article.link);
        if (article.titulo !== "" && isLink)
            addArticle(article).then(() => getDbArticles());
    }

    return (
        <div>
            <If test={webCrawlers && dbArticle}>
                <AccMain
                    key={`AccMain`}
                    webCrawlers={webCrawlers}
                    dbArticle={dbArticle}
                    handleAdd={handleAdd}
                />
            </If>
        </div>
    );
};
