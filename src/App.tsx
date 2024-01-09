import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      navigate("top-games");
    }
  }, [category, navigate]);

  return (
    <>
      <Navbar />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
}
