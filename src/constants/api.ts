import { Category, Sort } from "../store/types";

export const REACT_APP_API_KEY = "AIzaSyCSQDCt99JqlNwtpki9sCqO6G1C8appsIo";
export const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
export const MAX_RESULTS = 30;

export const categories: Category[] = [
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];

export const sortValues: Sort[] = ["relevance", "newest"];
