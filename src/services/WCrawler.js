import axios from "axios";

const URL = "https://article-list-api.herokuapp.com/webcrawlers";

export const getWebCrawlersList = () => {
    return axios.get(URL).then((resp) => resp.data);
};

export const getWebCrawlerArticles = (name) => {
    return axios.get(`${URL}/${name}`).then((resp) => resp.data);
};
