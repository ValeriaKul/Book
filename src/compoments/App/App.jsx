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
        <Route element={<HomePage />} path="/book-react/" />
        <Route element={<AuthorPage />} path="/book-react/author" />
        <Route element={<CompaniesPage />} path="/book-react/companies" />
        <Route element={<ArticlesPage />} path="/book-react/articles" />
        <Route element={<NotFoundPage />} path="/book-react/*" />
      </Routes>
      <Footer/>
     </div>
  );
}
