import Chips from "../../components/Chips/Chips";
import CSSIcon from "../../icons/CSSIcon";
import HTMLIcon from "../../icons/HTMLIcon";
import JavascriptIcon from "../../icons/JavascriptIcon";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Skills</h2>

      <div>
        <h3 className={styles.skillTitle}>Frontend</h3>
      </div>
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
  );
};

export default Skills;
