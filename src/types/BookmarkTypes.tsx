//Header type

import React from "react";

export type HeaderProps = {
  title: string;
};

// Bookmark type (form)

export type Bookmark = {
  id: number;
  title: string;
  url: string;
};

//State type

export type StateType = {
  bookmarks: Bookmark[];
};

//Context and Reducer Types

export type BookmarkContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionProps>;
};

export type BookmarkProviderType = {
  children: React.ReactNode;
};

export type AddBookmark = {
  type: "ADD_BOOKMARK";
  payload: Bookmark;
};

export type RemoveBookmark = {
  type: "REMOVE_BOOKMARK";
  payload: {
    id: number;
  };
};

export type RemoveBookmarkType = (id: number) => void;

export type ActionProps = AddBookmark | RemoveBookmark;

export type ReducerType = (state: StateType, action: ActionProps) => StateType;
