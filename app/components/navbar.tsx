import styles from "./navbar.module.css"
import Link from "next/link";

export default function Navbar() {
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
