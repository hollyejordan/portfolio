"use client"
import Link from "next/link";
import styles from "./LinkButton.module.css"

type ButtonProps = {
  path: string;
  innerText: string;
};

export default function LinkButton({ path, innerText }: ButtonProps) {

  return (
    <Link className={`${styles.button} button`} href={path}>{innerText}</Link>
  );
}

{`${styles.form} thinBorderBox`}