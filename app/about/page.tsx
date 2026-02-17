"use client"
import LinkButton from "../components/LinkButton/LinkButton";
import { useRouter } from 'next/navigation'
import styles from "./page.module.css";

export default function Contact() {

    const router = useRouter();

    const back = () => {
        router.back();
    }

  return (
    <>
        <h1>About</h1>
        <p>This website is still in development. This page has not been fully implemented yet. Thank you for your patience.</p>
        <div className={styles.returnButtonContainer}>
            <LinkButton path="/" innerText="Return To Homepage"></LinkButton>
            <a className="button" onClick={back}>Return To Previous Page</a>
        </div>
    </>
  );
}