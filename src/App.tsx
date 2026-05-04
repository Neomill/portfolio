import Hero from "./components/Hero/Hero";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <Hero />
      </div>
    </div>
  );
}

export default App;
