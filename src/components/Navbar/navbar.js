// import React from "react";
// import styles from "./navbar.module.css";

// const Navbar = () => {
//   return (
//     <div className={styles.navbar}>
//       <h2>Hello from Navbar</h2>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.module.css";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/contact",
      text: "Contact",
    },
  ];

  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id} className="underline">
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
