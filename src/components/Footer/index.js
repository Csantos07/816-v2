import './Footer.scss';

const Footer = ({ dropdownVisible }) => {
  return (
    <footer className={`footer ${dropdownVisible ? "dropdown-visible" : ""}`}>
      <img src="/no-date.svg" alt="" />
    </footer>
  );
}

export default Footer;
