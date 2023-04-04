import * as React from "react";
import booksStore from "../../store/books";
import { useParams } from "react-router-dom";
import styles from "../detailsBooks/detailBooks.module.scss";
import { ColorRing } from "react-loader-spinner";
import { observer } from "mobx-react";
import { useEffect } from "react";
import ColorButton from "../../components/button";
import { useNavigate } from "react-router-dom";

const DetailBooks = () => {
  const params = useParams();
  let { id } = params;
  const navigate = useNavigate();
  useEffect(() => {
    booksStore.fetchOneBook(id);
  }, [id]);

  if (booksStore.bookIsLoading) {
    return (
      <>
        <div className={styles.root}>
          <ColorRing />
        </div>
      </>
    );
  }
  return (
    <>
      <div className={styles.root}>
        <div className={styles.img_wrapper}>
          <p>Book photo</p>
          <img
            src={booksStore.book?.volumeInfo?.imageLinks?.thumbnail}
            alt={booksStore.book?.volumeInfo?.title}
          />
        </div>
        <div className={styles.info_wrapper}>
          <p>Title</p>
          <h1> {booksStore.book?.volumeInfo?.title} </h1>
          {booksStore.book?.volumeInfo?.description && (
            <>
              <p>Description</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: booksStore.book.volumeInfo.description,
                }}
              />
            </>
          )}
          {booksStore.book?.volumeInfo?.categories && (
            <>
              <p>Categories</p>
              <li>
                {(booksStore.book?.volumeInfo?.categories || []).join(", ")}
              </li>
            </>
          )}
        </div>
      </div>
      <ColorButton onClick={() => navigate("/booksData/list")}>
        back
      </ColorButton>
    </>
  );
};

export default observer(DetailBooks);
