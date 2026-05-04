import Hero from "./section/Hero/Hero";
import styles from "./App.module.scss";
import Projects from "./section/Projects/Projects";

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <Hero />
        <Projects />
      </div>
    </div>
  );
}

export default App;
