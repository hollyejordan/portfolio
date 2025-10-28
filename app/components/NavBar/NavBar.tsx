import styles from "./NavBar.module.css"
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact Me</Link>
    </div>
  );
}
