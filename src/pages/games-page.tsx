import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import GameItem from "../components/GameItem/GameItem";
import styles from "./games-page.module.css";
import { useMemo } from "react";

export interface GameInterface {
  image: string;
  id: string;
  name: string;
  categories: string[];
}

export interface JackpotInterface {
  game: string;
  amount: number;
}

export interface MergedDataInterface {
  image: string;
  id: string;
  name: string;
  categories: string[];
  amount?: number;
}

const fetchGames = async () => {
  const result = await axios.get(
    "https://stage.whgstage.com/front-end-test/games.php"
  );
  return result.data;
};

const fetchJackpots = async () => {
  const result = await axios.get(
    "https://stage.whgstage.com/front-end-test/jackpots.php"
  );
  return result.data;
};

export default function GamesPage() {
  const games = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
    refetchInterval: 45000,
  });

  const jackpots = useQuery({
    queryKey: ["jackpots"],
    queryFn: fetchJackpots,
    refetchInterval: 45000,
  });

  const isPending = games.isPending || jackpots.isPending;
  const isError = games.isError || jackpots.isError;

  const mergedData = useMemo(() => {
    if (!isPending && !isError) {
      const temp = games.data.map((game: GameInterface) => {
        const index = jackpots.data.findIndex(
          (jackpot: JackpotInterface) => jackpot.game === game.id
        );
        if (index >= 0) {
          return { ...game, amount: jackpots.data[index as number].amount };
        }
        return game;
      });
      return temp;
    }
    return [];
  }, [games, jackpots, isPending, isError]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Unexpeced error occured</div>;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {mergedData.map((game: GameInterface) => (
          <GameItem
            key={game.id}
            data={game}
          />
        ))}
      </div>
    </div>
  );
}
