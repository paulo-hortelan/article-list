import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    faPlus,
    faLink,
    faTag,
    faBookmark,
    faTrash,
    faPencil,
    faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import Home from "./views/Home";
import Search from "./views/Search";

library.add(faPlus, faLink, faTag, faBookmark, faTrash, faPencil, faNewspaper);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
