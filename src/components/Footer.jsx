import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo footer" />
      <div>
        <h4>Doormat Nav igation</h4>
        <ul>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Menu</Link>
          </li>
          <li>
            <Link to="#">Reservations</Link>
          </li>
          <li>
            <Link to="#">Order Online</Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4>Contact</h4>
        <ul>
          <li>Adress</li>
          <li>phone number</li>
          <li>email</li>
        </ul>
      </div>

      <div>
        <h4>Social Media Links</h4>
        <ul>
          <li>Adress</li>
          <li>phone number</li>
          <li>email</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
