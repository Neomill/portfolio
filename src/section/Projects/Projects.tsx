import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import styles from "./Projects.module.scss";
import projects from "./data.json";
const Projects = () => {
  return (
    <Section>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.projectContainer}>
        {projects.map((project) => (
          <Card key={project.id}>
            <Card.Thumbnail src={project.thumbnail} alt={project.alt} />

            <Card.Content>
              <Card.Title>{project.title}</Card.Title>

              <Card.Description>{project.description}</Card.Description>
            </Card.Content>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
