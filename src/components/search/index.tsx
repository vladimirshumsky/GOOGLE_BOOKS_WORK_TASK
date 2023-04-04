import React, { useCallback, useEffect, useRef } from "react";
import { observer } from "mobx-react";
import booksStore from "../../store/books";
import styles from "./search.module.scss";
import searchLogo from "../../assets/img/search.png";
import close from "../../assets/img/close.png";
import _debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";
import searchValueStore from "../../store/books";

const Search = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const nullHandler = (e) => {
    e.preventDefault();
    booksStore.valueChange("");
    ref.current.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(_debounce(handleDebounceFn, 800), []);

  function handleDebounceFn() {
    booksStore.fetchBooks();
  }

  useEffect(() => {
    searchValueStore.fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValueStore.category, searchValueStore.sort]);

  const onChangeSearchHandler = (value) => {
    booksStore.valueChange(value);
    debounceFn(value);
    navigate("/booksData/list");
  };
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={searchLogo} alt="logo" />
      <input
        value={booksStore.searchValue}
        onChange={(e) => onChangeSearchHandler(e.target.value)}
        onFocus={() => booksStore.pageChange(0)}
        type="text"
        className={styles.input}
        placeholder="searching ..."
        ref={ref}
      />
      {booksStore.searchValue && (
        <img
          onMouseDown={nullHandler}
          className={styles.close}
          src={close}
          alt="close"
        />
      )}
    </div>
  );
};

export default observer(Search);
