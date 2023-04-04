import { injectStores } from "@mobx-devtools/tools";
import booksStore from "./books";

injectStores({
  booksStore,
});

export { booksStore };
