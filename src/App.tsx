import React from "react";
import "./App.css";
import Search from "./components/search";
import BasicSelect from "./components/select/select";
import BooksItems from "./pages/booksList/booksItems";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/homePages";
import DetailBooks from "./pages/detailsBooks/detailBooks";
import booksStore from "./store/books";
import Error from "./components/error";
import { categories, sortValues } from "./constants/api";
import { Category, Sort } from "./store/types";

const App = () => {
  return (
    <div className="App">
      <header className="search-block">
        <Link to={"/"}>
          <div className="title">Search your book</div>
        </Link>
        <Search />
        <div className="selected-wrapper">
          <BasicSelect<Category>
            title={"categories"}
            items={categories}
            onChange={(item) => booksStore.categoryChange(item)}
          />
          <BasicSelect<Sort>
            title={"Sorting by"}
            items={sortValues}
            onChange={(item) => booksStore.sortChange(item)}
          />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booksData/list" element={<BooksItems />} />
        <Route path="booksData/:id" element={<DetailBooks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
