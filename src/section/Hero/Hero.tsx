import profile from "../../assets/profile.png";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import ArrowExternalLinkIcon from "../../icons/ArrowExternalLinkIcon";
import FolderIcon from "../../icons/FolderIcon";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <Section className={styles.section}>
      {/* LEFT SIDE */}
      <div className={styles.content}>
        <h1 className={styles.name}>
          Neomill Marc <br className={styles.break} /> Reas
        </h1>

        <h2 className={styles.subtitle}>Software Developer</h2>

        {/* MOBILE IMAGE */}
        <img
          src={profile}
          alt="Profile"
          className={`${styles.profile} ${styles.mobileProfile}`}
        />

        <p className={styles.description}>
          I’m a Fullstack Developer specializing in real-time web applications,
          backend systems, and AWS cloud architecture.
        </p>

        <p className={styles.description}>
          I build and deploy production-ready applications including web games,
          admin systems, APIs, and websites (including WordPress-based
          solutions).
        </p>

        <div className={styles.actionGroup}>
          <Button variant="secondary">
            <span className={styles.btnContent}>
              <FolderIcon />
              View Resume
              <ArrowExternalLinkIcon />
            </span>
          </Button>

          <Button variant="secondary">
            <span className={styles.btnContent}>
              <FolderIcon />
              Book a Call
              <ArrowExternalLinkIcon />
            </span>
          </Button>
        </div>
      </div>

      {/* DESKTOP IMAGE */}
      <div className={styles.imageWrapper}>
        <img
          src={profile}
          alt="Profile"
          className={`${styles.profile} ${styles.desktopProfile}`}
        />
      </div>
    </Section>
  );
};

export default Hero;
