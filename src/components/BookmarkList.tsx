import { useContext } from "react";
import { BookmarkContext } from "../context/BookmarkContext";
import { RemoveBookmarkType } from "../types/BookmarkTypes";

const BookmarkList = () => {
  const { state, dispatch } = useContext(BookmarkContext);

  const removeBookmarkHandler: RemoveBookmarkType = (bookmarkId) => {
    dispatch({
      type: "REMOVE_BOOKMARK",
      payload: { id: bookmarkId }
    });
  };
  return (
    <div>
      {state.bookmarks.map((item) => (
        <div key={item.id}>
          <span> Title: {item.title} </span>

          <span>
            URL: <a href={item.url}>{item.url} </a>
          </span>

          <button onClick={() => removeBookmarkHandler(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
