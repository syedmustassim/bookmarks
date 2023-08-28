import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BookmarkProvider from "./context/BookmarkContext";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BookmarkProvider>
      <App />
    </BookmarkProvider>
  </React.StrictMode>
);
