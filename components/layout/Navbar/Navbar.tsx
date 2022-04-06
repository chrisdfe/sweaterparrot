import React, { ReactNode } from "react";
import Link from "next/link";

import styles from "./Navbar.module.css";

type NavbarLink = {
  label: string;
  href: string;
  external?: boolean;
};

const links: NavbarLink[] = [
  // {
  //   label: "home",
  //   href: "/",
  // },
  {
    label: "about",
    href: "/about",
  },
  // {
  //   label: "store",
  //   href: "https://www.inprnt.com/gallery/sweaterparrot/",
  //   external: true,
  // },
];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <a>sweaterparrot</a>
        </Link>
      </div>

      <ul className={styles.navbarLinkList}>
        {links.map(({ href, label, external }) => (
          <li key={label} className={styles.navbarLink}>
            {external ? (
              <a href={href} target="_blank">
                {label}
              </a>
            ) : (
              <Link href={href}>
                <a>{label}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
