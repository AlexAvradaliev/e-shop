"use client";

import { useState } from "react";
import TopBar from "./TopBar.js";
import Navigation from "./Navigation.js";
import MegaMenu from "./MegaMenu.js";
import MobileMenu from "./MobileMenu.js";
import SearchOverlay from "./SearchOverlay.js";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <header className={styles.header}>
      <TopBar />

      <div className={styles.main}>
        <a className={styles.logo} href="/">
          E-Shop
        </a>

        <Navigation />

        <div className={styles.actions}>
          <button
            className={styles.iconButton}
            type="button"
            onClick={() => setSearchOpen(true)}
          >
            Search
          </button>

          <a className={styles.iconLink} href="/wishlist">
            Wishlist
          </a>

          <a className={styles.cartLink} href="/cart">
            Cart
          </a>

          <button
            className={styles.menuButton}
            type="button"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>

      <MegaMenu />

      {isMenuOpen ? (
        <MobileMenu onClose={() => setMenuOpen(false)} />
      ) : null}

      {isSearchOpen ? (
        <SearchOverlay onClose={() => setSearchOpen(false)} />
      ) : null}
    </header>
  );
}
