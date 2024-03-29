import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

const navItems = [
  { name: "Top Games", key: "top-games" },
  { name: "New Games", key: "new-games" },
  { name: "Slots", key: "slots" },
  { name: "Jackpots", key: "jackpots" },
  { name: "Live", key: "live" },
  { name: "Blackjack", key: "blackjack" },
  { name: "Roulette", key: "roulette" },
  { name: "Table", key: "table" },
  { name: "Poker", key: "poker" },
  { name: "Other", key: "other" },
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.space}></div>
      <div>
        <div className={styles.navList}>
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              className={({ isActive, isPending }) =>
                isPending
                  ? styles.navItemsPending
                  : isActive
                  ? styles.navItemsActive
                  : styles.navItems
              }
              to={item.key}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div
          className={styles.button}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Menu
        </div>
      </div>
      {showDropdown && (
        <div className={styles.dropdown}>
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              className={({ isActive, isPending }) =>
                isPending
                  ? styles.dropdownItemPending
                  : isActive
                  ? styles.dropdownItemActive
                  : styles.dropdownItem
              }
              to={item.key}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
