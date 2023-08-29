import { HeaderProps } from "../types/BookmarkTypes";

import "../styles.css";

const Header = ({ title }: HeaderProps) => {
  return (
    <div>
      <h1 className="header"> {title}</h1>
    </div>
  );
};

export default Header;
