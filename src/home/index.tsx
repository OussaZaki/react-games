import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div className="Home">
    <header className="home-header">
      <h1>Welcome to React Games</h1>
      <h3>This is a collection of classic games developped using react.</h3>
    </header>
    <ul className="home-menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/concentration">Concentration</Link>
      </li>
      <li>
        <Link to="/2048">2048</Link>
      </li>
    </ul>
  </div>
);

export default Home;
