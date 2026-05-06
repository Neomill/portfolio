import Hero from "./section/Hero/Hero";
import styles from "./App.module.scss";
import Projects from "./section/Projects/Projects";
import Skills from "./section/Skills/Skills";
import Contact from "./section/Contact/Contact";

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <Hero />
        <Projects />
        <Skills />
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
