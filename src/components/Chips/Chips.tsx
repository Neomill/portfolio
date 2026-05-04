import styles from "./Chips.module.scss";

interface ChipsProps {
  children?: React.ReactNode;
}

const Chips = ({ children }: ChipsProps) => {
  return <div className={styles.chip}>{children}</div>;
};

export default Chips;
