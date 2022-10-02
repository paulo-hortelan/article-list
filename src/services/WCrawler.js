import axios from "axios";

const URL = "https://article-list-api.herokuapp.com/webcrawlers";

const asyncTimeout = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

export const getWebCrawlersList = async () => {
    const resp = await axios.get(URL);
    return resp.data;
};

export const getWebCrawlerArticles = (name) => {
    return axios.get(`${URL}/${name}`).then((resp) => resp.data);
};
