import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import styles from "./Projects.module.scss";
const Projects = () => {
  return (
    <Section>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div>
        <Card>
          <Card.Thumbnail src="/assets/project1.png" alt="Project 1" />
          <Card.Content>
            <Card.Title>Chicken Crossy Game</Card.Title>
            <Card.Description>
              This is a description of Project 1. It is a web application built
              with React and Node.js.
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    </Section>
  );
};

export default Projects;
