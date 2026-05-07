import Chips from "../../components/Chips/Chips";
import Section from "../../components/Section/Section";
import CSSIcon from "../../icons/CSSIcon";
import HTMLIcon from "../../icons/HTMLIcon";
import JavascriptIcon from "../../icons/JavascriptIcon";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <Section className={styles.section}>
      <h2 className={styles.heading}>Skills</h2>

      <section className={styles.skillGroup}>
        <h3 className={styles.groupHeading}>Frontend</h3>

        <ul className={styles.skillList}>
          <li>
            <Chips>
              <HTMLIcon /> HTML
            </Chips>
          </li>
          <li>
            <Chips>
              <CSSIcon />
              CSS
            </Chips>
          </li>
          <li>
            <Chips>
              <JavascriptIcon />
              Javascript
            </Chips>
          </li>
        </ul>
      </section>

      <section className={styles.skillGroup}>
        <h3 className={styles.groupHeading}>Frontend</h3>

        <ul className={styles.skillList}>
          <li>
            <Chips>
              <HTMLIcon /> HTML
            </Chips>
          </li>
          <li>
            <Chips>
              <CSSIcon />
              CSS
            </Chips>
          </li>
          <li>
            <Chips>
              <JavascriptIcon />
              Javascript
            </Chips>
          </li>
        </ul>
      </section>

      <section className={styles.skillGroup}>
        <h3 className={styles.groupHeading}>Frontend</h3>

        <ul className={styles.skillList}>
          <li>
            <Chips>
              <HTMLIcon /> HTML
            </Chips>
          </li>
          <li>
            <Chips>
              <CSSIcon />
              CSS
            </Chips>
          </li>
          <li>
            <Chips>
              <JavascriptIcon />
              Javascript
            </Chips>
          </li>
        </ul>
      </section>
    </Section>
  );
};

export default Skills;
