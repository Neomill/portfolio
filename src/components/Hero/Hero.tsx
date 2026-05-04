import profile from "../../assets/profile.png";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section>
      <h1 className={styles.name}>Neomill Marc Reas</h1>
      <h2 className={styles.subtitle}>Software Developer</h2>

      <img src={profile} alt="Profile" className={styles.profile} />

      <p className={styles.description}>
        I’m a Fullstack Developer specializing in real-time web applications,
        backend systems, and AWS cloud architecture.
      </p>

      <p className={styles.description}>
        I build and deploy production-ready applications including web games,
        admin systems, APIs, and websites (including WordPress-based solutions).
      </p>

      <div>
        <button></button>
        <button></button>
      </div>
    </section>
  );
};

export default Hero;
