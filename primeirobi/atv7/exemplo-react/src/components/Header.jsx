import Navigation from './Navigation';

function Header({ titulo, links }) {
  return (
    <header>
      <h1>{titulo}</h1>
      <Navigation links={links} />
    </header>
  );
}

export default Header;
