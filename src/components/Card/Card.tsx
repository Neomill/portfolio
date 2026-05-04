import styles from "./Card.module.scss";
import clsx from "clsx";

interface ThumbnailProps {
  src: string;
  alt?: string;
}

export const Thumbnail = ({ src, alt }: ThumbnailProps) => {
  return (
    <div className={styles.cardthumbnail}>
      <img src={src} alt={alt} />
    </div>
  );
};

interface TitleProps {
  children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return <h3 className={styles.cardtitle}>{children}</h3>;
};

interface DescriptionProps {
  children: React.ReactNode;
}

export const Description = ({ children }: DescriptionProps) => {
  return <p className={styles.carddescription}>{children}</p>;
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const CardRoot = ({ children, className }: CardProps) => {
  return <div className={clsx(styles.card, className)}>{children}</div>;
};

const Card = Object.assign(CardRoot, {
  Thumbnail,
  Title,
  Description,
});

export default Card;
