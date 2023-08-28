import { createContext, useReducer } from "react";
import BookmarkReducer from "../reducer/BookmarkReducer";

import {
  BookmarkContextType,
  BookmarkProviderType,
  StateType
} from "../types/BookmarkTypes";

export const BookmarkContext = createContext({} as BookmarkContextType); //Type assertion

const BookmarkProvider: React.FC<BookmarkProviderType> = ({ children }) => {
  const initialState: StateType = {
    bookmarks: []
  };

  const [state, dispatch] = useReducer(BookmarkReducer, initialState);
  return (
    <BookmarkContext.Provider value={{ state, dispatch }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;
