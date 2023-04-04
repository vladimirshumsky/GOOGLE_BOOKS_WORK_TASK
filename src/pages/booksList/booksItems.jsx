import * as React from "react";
import styles from "./booksItem.module.scss";
import { observer } from "mobx-react";
import booksStore from "../../store/books";
import { ColorRing } from "react-loader-spinner";
import MediaCard from "../../components/card";
import ColorButton from "../../components/button";

const BooksItems = () => {
  const paginateHandler = () => {
    booksStore.pageChange(booksStore.page + 1);
    booksStore.fetchBooks();
  };
  if (booksStore.booksIsLoading) {
    return (
      <div className={styles.loader}>
        <ColorRing />
      </div>
    );
  }
  return (
    <>
      <p>Found {booksStore.booksData?.totalItems || 0} results</p>
      <div className={styles.root}>
        {booksStore.booksData?.items?.map((item, index) => (
          <MediaCard key={item.id} book={item} />
        ))}
      </div>
      {booksStore.booksData?.totalItems > 0 && (
        <ColorButton onClick={paginateHandler}>Load more! </ColorButton>
      )}
    </>
  );
};
export default observer(BooksItems);
