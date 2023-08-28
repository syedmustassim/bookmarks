import { ReducerType } from "../types/BookmarkTypes";

const BookmarkReducer: ReducerType = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };

    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(({ id }) => id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default BookmarkReducer;
