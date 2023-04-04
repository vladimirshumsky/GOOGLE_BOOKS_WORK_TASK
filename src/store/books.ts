import axios from "axios";
import { BASE_URL, MAX_RESULTS, REACT_APP_API_KEY } from "../constants/api";
import { makeAutoObservable } from "mobx";
import { Book, BooksData, Category, Sort } from "./types";

class BooksStore {
  booksIsLoading: boolean = false;
  bookIsLoading: boolean = false;
  booksData: BooksData | {} = {};
  book: Book | {} = {};
  searchValue: string = "";
  category: Category = "art";
  sort: Sort = "relevance";
  page: number = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  valueChange(value: string) {
    this.searchValue = value;
  }

  categoryChange(value: Category) {
    this.category = value;
  }

  sortChange(value: Sort) {
    this.sort = value;
  }

  pageChange(value: number) {
    this.page = value;
  }

  async fetchBooks() {
    const startIndex = MAX_RESULTS * this.page;
    try {
      this.booksIsLoading = true;
      const response = await axios.get(
        `${BASE_URL}?q=${this.searchValue}+subject:${this.category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${this.sort}&key=${REACT_APP_API_KEY}`
      );
      this.booksData = response.data;
    } catch (error) {
      console.error(error);
    } finally {
      this.booksIsLoading = false;
    }
  }

  async fetchOneBook(id) {
    try {
      this.bookIsLoading = true;
      const response = await axios.get(
        `${BASE_URL}/${id}?${REACT_APP_API_KEY}`
      );
      this.book = response.data;
    } catch (error) {
      console.error(error);
    } finally {
      this.bookIsLoading = false;
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new BooksStore();
