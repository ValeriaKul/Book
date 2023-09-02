import React from "react";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import AuthorPage from "../../pages/AuthorPage/AuthorPage";
import CompaniesPage from "../../pages/CompaniesPage/CompaniesPage";
import ArticlesPage from "../../pages/ArticlesPage/ArticlesPage";
import './app.css';
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/book/" />
        <Route element={<AuthorPage />} path="/book/author" />
        <Route element={<CompaniesPage />} path="/book/companies" />
        <Route element={<ArticlesPage />} path="/book/articles" />
        <Route element={<NotFoundPage />} path="/book/*" />
      </Routes>
      <Footer/>
     </div>
  );
}
