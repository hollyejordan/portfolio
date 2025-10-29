import Form from 'next/form'
import styles from "./page.module.css";

export default function Contact() {

  const formAction = async (formData: FormData) => {

    'use server'

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log(name);
    console.log(email);
    console.log(message);
  }

  return (
    <>
      <h1>Contact Me</h1>
      <p className={styles.desc}>Thanks for reaching out to me.</p>
      <p className={styles.desc}>You can contact me by email at hollyjordan200202@gmail.com, or by filling out this short form.</p>
      <Form className={`${styles.form} thinBorderBox`} action={formAction}>
        <label>
          Name
          <input name="name" />
        </label>

        <label>
          Email Address
          <input name="email" />
        </label>

        <label>
          Message
          <textarea className={styles.message} name="message" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </>
  );
}