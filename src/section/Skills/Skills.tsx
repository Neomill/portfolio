import Chips from "../../components/Chips/Chips";
import Section from "../../components/Section/Section";
import CSSIcon from "../../icons/CSSIcon";
import HTMLIcon from "../../icons/HTMLIcon";
import JavascriptIcon from "../../icons/JavascriptIcon";
import MaterialIcon from "../../icons/MaterialIcon";
import NextJsIcon from "../../icons/NextJsIcon";
import PhaserIcon from "../../icons/PhaserIcon";
import ReactJsIcon from "../../icons/ReactJsIcon";
import ReduxIcon from "../../icons/ReduxIcon";
import TailwindIcon from "../../icons/TailwindIcon";
import JestIcon from "../../icons/JestIcon";

import styles from "./Skills.module.scss";
import NodeIcon from "../../icons/NodeIcon";
import ExpressJsIcon from "../../icons/ExpressJsIcon";
import MongoDbIcon from "../../icons/MongoDbIcon";
import GraphQLIcon from "../../icons/GraphQLIcon";
import AwsIcon from "../../icons/AwsIcon";
import GitIcon from "../../icons/GitIcon";
import FigmaIcon from "../../icons/FigmaIcon";
import ViteIcon from "../../icons/ViteIcon";
import GithubIcon from "../../icons/GithubIcon";
import PostmanIcon from "../../icons/PostmanIcon";
import RestApiIcon from "../../icons/RestApiIcon";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: HTMLIcon },
      { name: "CSS", icon: CSSIcon },
      { name: "JavaScript", icon: JavascriptIcon },
      { name: "ReactJs", icon: ReactJsIcon },
      { name: "NextJs", icon: NextJsIcon },
      { name: "Phaser", icon: PhaserIcon },
      { name: "Tailwind", icon: TailwindIcon },
      { name: "Material UI", icon: MaterialIcon },
      { name: "Redux", icon: ReduxIcon },
      { name: "Jest", icon: JestIcon },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NodeJs", icon: NodeIcon },
      { name: "Express.js", icon: ExpressJsIcon },
      { name: "MongoDB", icon: MongoDbIcon },
      { name: "GraphQL", icon: GraphQLIcon },
      { name: "REST API", icon: RestApiIcon },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "AWS", icon: AwsIcon },
      { name: "Git", icon: GitIcon },
      { name: "Figma", icon: FigmaIcon },
      { name: "Vite", icon: ViteIcon },
      { name: "Github", icon: GithubIcon },
      { name: "Postman", icon: PostmanIcon },
    ],
  },
];

const Skills = () => {
  return (
    <Section className={styles.section}>
      <h2 className={styles.heading}>Skills</h2>

      {skillsData.map((group) => (
        <section key={group.title} className={styles.skillGroup}>
          <h3 className={styles.groupHeading}>{group.title}</h3>

          <ul className={styles.skillList}>
            {group.skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <li key={skill.name}>
                  <Chips>
                    <Icon />
                    {skill.name}
                  </Chips>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </Section>
  );
};

export default Skills;
