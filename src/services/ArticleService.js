import axios from "axios";

const URL = "https://article-list-api.onrender.com/articles";

export const getArticles = () => {
    return axios.get(`${URL}`).then((resp) => resp.data);
};

export const addArticle = (article) => {
    return axios.post(URL, { titulo: article.titulo, link: article.link });
};

export const editArticle = (article) => {
    return axios.put(`${URL}/${article.id}`, {
        id: article.id,
        titulo: article.titulo,
        link: article.link,
        data: article.data,
    });
};

export const deleteArticle = (article) => {
    return axios.delete(`${URL}/${article.id}`);
};
