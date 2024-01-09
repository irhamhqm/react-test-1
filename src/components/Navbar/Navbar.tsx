import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

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
  return (
    <nav className={styles.nav}>
      <div className={styles.space}></div>
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
    </nav>
  );
}
