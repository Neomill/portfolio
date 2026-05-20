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
          I’m a full-stack developer who builds modern web applications and
          interactive user experiences using React, Node.js, and AWS. I focus on
          creating fast, responsive, and reliable applications with clean and
          maintainable code.
        </p>

        <p className={styles.description}>
          I’ve worked on browser games, admin systems, APIs, and custom websites
          from start to deployment. I enjoy building products that are simple to
          use, visually clean, and designed to perform well across different
          devices.
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
