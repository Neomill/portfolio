import clsx from "clsx";
import styles from "./Contact.module.scss";
import { Button } from "../../components/Button/Button";
import LinkedinIcon from "../../icons/LinkedinIcon";
import GithubIcon from "../../icons/GithubIcon";
import ArrowIcon from "../../icons/ArrowIcon";
const Contact = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.heading}>Contact Me</h2>

      <div className={styles.content}>
        {/* LEFT: FORM */}
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>
              Name <span>*</span>
            </label>
            <input
              className={clsx(styles.formInput)}
              type="text"
              placeholder="John Doe"
              name="name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              Email <span>*</span>
            </label>
            <input
              className={clsx(styles.formInput)}
              type="email"
              placeholder="johndoe@gmail.com"
              name="email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>
              Message <span>*</span>
            </label>
            <textarea
              className={clsx(styles.formInput)}
              placeholder="Hi"
              name="message"
              required
            />
          </div>

          <button type="submit" className={styles.sendBtn}>
            Send <span className={styles.arrow}>→</span>
          </button>
        </form>

        {/* RIGHT: CONTACT INFO */}
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>rneomillmarc@gmail.com</p>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.label}>Based</p>
            <p className={styles.value}>Cebu City, Philippines</p>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.label}>Phone</p>
            <p className={styles.value}>+639622676783</p>
          </div>
          <div className={styles.socials}>
            <Button variant="secondary">
              <a
                href="https://www.linkedin.com/in/neomill"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
                <ArrowIcon className={styles.arrow} />
              </a>
            </Button>
            <Button variant="secondary">
              <a
                href="https://github.com/Neomill"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <GithubIcon />
                <span>Github</span>
                <ArrowIcon className={styles.arrow} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
