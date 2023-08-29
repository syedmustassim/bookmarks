import { useContext } from "react";
import { BookmarkContext } from "../context/BookmarkContext";
import { RemoveBookmarkType } from "../types/BookmarkTypes";

import "../styles.css";
import { FiTrash } from "react-icons/fi";

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
        <div key={item.id} className="bookmark-card">
          <span className="title">
            {" "}
            <strong>Title:</strong> {item.title}{" "}
          </span>

          <span className="url">
            <strong> URL: </strong>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.url}{" "}
            </a>
          </span>

          <FiTrash
            onClick={() => removeBookmarkHandler(item.id)}
            size={22}
            className="icon"
          />
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
