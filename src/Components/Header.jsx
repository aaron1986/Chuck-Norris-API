import { Link } from "react-router-dom";
export default function Header() {
    return (
           <header>
      <nav>
        <ul id="nav-links">
          <li><Link to="/jokes">Jokes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
          <h1>Chuck Norris Jokes!</h1>
    </header>
    )
}