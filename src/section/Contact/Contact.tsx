import styles from "./Contact.module.scss";
import { Button } from "../../components/Button/Button";
import LinkedinIcon from "../../icons/LinkedinIcon";
import GithubIcon from "../../icons/GithubIcon";
import ArrowIcon from "../../icons/ArrowIcon";
import Section from "../../components/Section/Section";
import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import clsx from "clsx";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);

    // honeypot check
    if (formData.get("company")) {
      console.warn("Spam detected");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      console.log("SUCCESS!", result.text);
      form.current.reset(); // optional but good UX
      setStatus("success");
    } catch (error) {
      console.log("FAILED...", error);
      setStatus("error");
    }
  };

  return (
    <Section className={styles.section}>
      <h2 className={styles.heading}>Contact Me</h2>

      <div className={styles.content}>
        {/* LEFT: FORM */}

        {status === "idle" && (
          <form className={styles.form} ref={form} onSubmit={sendEmail}>
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

            <input
              type="text"
              name="company"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <button type="submit" className={styles.sendBtn}>
              Send <span className={styles.arrow}>→</span>
            </button>
          </form>
        )}

        {status === "success" && (
          <div className={styles.successWrapper}>
            <img
              src="/success.gif"
              className={styles.successGif}
              alt="success"
            />

            <h3>Message sent successfully 🎉</h3>

            <p>
              Thanks! I’ll get back to you <br />
              as soon as possible.
            </p>
          </div>
        )}

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
    </Section>
  );
};

export default Contact;
