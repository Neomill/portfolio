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
          src={"./profile.png"}
          alt="Profile"
          className={`${styles.profile} ${styles.mobileProfile}`}
        />

        <p className={styles.description}>
          I'm a senior HTML5 game developer with experience building browser
          games using PixiJS, Phaser.js, and TypeScript. I build fast, smooth,
          and responsive games with clean, maintainable code, from gameplay
          features to deployment.
        </p>

        <p className={styles.description}>
          I also work as a full-stack web developer using React, Node.js, and
          AWS. I've built admin dashboards, APIs, custom websites, and game
          portals that are reliable, scalable, and easy to use. I enjoy solving
          technical problems and building products that people can use with
          confidence.
        </p>

        <div className={styles.actionGroup}>
          <a
            href="./resume-neomill-marc-reas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button variant="secondary">
              <span className={styles.btnContent}>
                <FolderIcon />
                View Resume
                <ArrowExternalLinkIcon />
              </span>
            </Button>
          </a>

          <a
            href="https://calendly.com/rneomillmarc/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button variant="secondary">
              <span className={styles.btnContent}>
                <FolderIcon />
                Book a Call
                <ArrowExternalLinkIcon />
              </span>
            </Button>
          </a>
        </div>
      </div>

      {/* DESKTOP IMAGE */}
      <div className={styles.imageWrapper}>
        <img
          src={"./profile.png"}
          alt="Profile"
          className={`${styles.profile} ${styles.desktopProfile}`}
        />
      </div>
    </Section>
  );
};

export default Hero;
