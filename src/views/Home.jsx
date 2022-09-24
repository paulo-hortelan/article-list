import React, { useEffect, useState } from "react";

import {
    getArticles,
    addArticle,
    editArticle,
    deleteArticle,
} from "../services/ArticleService";

import { isValidHttpUrl } from "../helpers/Util";

import FormAdd from "../components/FormAdd";
import ArticleList from "../components/ArticleList";
import ModalAlert from "../components/ModalAlert";
import ModalEdit from "../components/ModalEdit";
import If from "../helpers/If";

function Home(props) {
    const [article, setArticle] = useState({
        titulo: "",
        link: "",
        list: [],
    });

    const [articleSelected, setArticleSelected] = useState({
        edit: false,
        delete: false,
        id: "",
        titulo: "",
        link: "",
    });

    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        refresh();
    }, []);

    useEffect(() => {
        if (articleSelected.edit) handleShowModal();
        if (articleSelected.delete)
            deleteArticle(articleSelected).then(() => refresh());
    }, [articleSelected]);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleShowAlert = () => setShowAlert(true);
    const handleCloseAlert = () => setShowAlert(false);

    const refresh = () => {
        getArticles().then((resp) => {
            setArticle({
                ...article,
                titulo: "",
                link: "",
                list: resp,
            });
        });
    };

    const handleChangeAdd = (evt) => {
        setArticle({
            ...article,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleAdd = () => {
        const isLink = isValidHttpUrl(article.link);
        if (article.titulo !== "" && isLink)
            addArticle(article).then(() => refresh());
        else handleShowAlert();
    };

    const handleChangeEdit = (evt) => {
        setArticleSelected({
            ...articleSelected,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleEdit = (article) => {
        setArticleSelected({
            ...article,
            edit: true,
            delete: false,
        });
    };

    const handleSaveEdit = () => {
        const isLink = isValidHttpUrl(articleSelected.link);
        if (articleSelected.titulo !== "" && isLink)
            editArticle(articleSelected)
                .then(() => refresh())
                .then(() => handleCloseModal());
        else handleShowAlert();
    };

    const handleDelete = (article) => {
        setArticleSelected({
            ...article,
            edit: false,
            delete: true,
        });
    };

    return (
        <>
            <div className="pb-4">
                <FormAdd
                    article={article}
                    handleChange={handleChangeAdd}
                    handleAdd={handleAdd}
                />
            </div>
            <ArticleList
                list={article.list}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            <If test={showModal}>
                <ModalEdit
                    article={articleSelected}
                    showModal={showModal}
                    onClickCancel={handleCloseModal}
                    onClickSave={handleSaveEdit}
                    handleChange={handleChangeEdit}
                />
            </If>
            <If test={showAlert}>
                <ModalAlert
                    showAlert={showAlert}
                    onCloseAlert={handleCloseAlert}
                />
            </If>
        </>
    );
}

export default Home;
