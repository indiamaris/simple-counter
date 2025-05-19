/** @format */

import { Link } from "react-router-dom";

import styles from "./header.module.css";

function Header() {
  return (
    <div data-testid="header">
      <Link to="/">
        <h1 data-testid="header-title" className={styles.header}>
          {" "}
          Simple Counter
        </h1>
      </Link>
    </div>
  );
}

export default Header;
