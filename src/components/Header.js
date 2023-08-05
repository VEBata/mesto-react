import HeaderLogo from "../images/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo" alt="Лого" src={HeaderLogo} />
    </header>
  );
}

export default Header;
