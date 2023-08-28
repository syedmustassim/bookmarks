import { HeaderProps } from "../types/BookmarkTypes";

const Header = ({ title }: HeaderProps) => {
  return (
    <div>
      <h1> {title}</h1>
    </div>
  );
};

export default Header;
