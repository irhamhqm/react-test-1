import { useMemo } from "react";
import styles from "./GameItem.module.css";
import TopRibbon from "../Ribbons/TopRibbon";
import NewRibbon from "../Ribbons/NewRibbon";
import { MergedDataInterface } from "../../pages/games-page";

export type GameItemProps = {
  data: MergedDataInterface;
};

export default function GameItem({ data }: GameItemProps) {
  const isTop = useMemo(() => {
    return data.categories.includes("top");
  }, [data.categories]);
  const isNew = useMemo(() => {
    return data.categories.includes("new");
  }, [data.categories]);
  return (
    <div
      className={styles.gameItem}
      key={data.id}
    >
      {isTop && <TopRibbon />}
      {isNew && <NewRibbon />}
      {data.amount && (
        <div className={styles.jackpotAmount}>&#163;{data.amount}</div>
      )}
      <img
        className={styles.gameImage}
        src={`https://${data.image}`}
        alt={data.name}
      />
    </div>
  );
}
