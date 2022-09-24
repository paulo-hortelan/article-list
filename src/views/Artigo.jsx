import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const URL = "https://article-list-api.herokuapp.com/articles";

export default (props) => {
    const { id } = useParams();
    const [article, setArticle] = useState({ titulo: "", link: "" });

    useEffect(() => {
        getArticle();
    });

    const getArticle = () => {
        console.log(`${URL}/${id}`);
        axios.get(`${URL}/${id}`).then((resp) =>
            setArticle({
                ...article,
                titulo: resp.titulo,
                link: resp.link,
            })
        );
    };
    return (
        <div>
            <h1>{article.titulo}</h1>
            <h1>{article.link}</h1>
        </div>
    );
};
