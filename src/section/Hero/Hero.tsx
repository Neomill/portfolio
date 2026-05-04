import profile from "../../assets/profile.png";
import Button from "../../components/Button/Button";
import ArrowExternalLinkIcon from "../../icons/ArrowExternalLinkIcon";
import FolderIcon from "../../icons/FolderIcon";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.section}>
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

      <div className={styles.actionGroup}>
        <Button variant="secondary">
          <span className={styles.btnContent}>
            <FolderIcon /> View Resume
            <ArrowExternalLinkIcon />
          </span>
        </Button>
        <Button variant="secondary">
          <span className={styles.btnContent}>
            <FolderIcon /> Book a Call
            <ArrowExternalLinkIcon />
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
