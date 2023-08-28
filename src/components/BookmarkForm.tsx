import React, { useContext, useState } from "react";
import { BookmarkContext } from "../context/BookmarkContext";

import { Bookmark } from "../types/BookmarkTypes";

const BookmarkForm = () => {
  const { state, dispatch } = useContext(BookmarkContext);
  const [formData, setFormData] = useState<Bookmark>({
    id: 0,
    title: "",
    url: ""
  });

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const { title, url } = formData;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({
      type: "ADD_BOOKMARK",
      payload: { id: state.bookmarks.length + 1, title, url }
    });
    setFormData({ id: 0, title: "", url: "" });
  };

  console.log(formData);
  console.log(state);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={inputHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="url">URL: </label>
          <input
            type="text"
            value={url}
            name="url"
            onChange={inputHandler}
            required
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default BookmarkForm;
