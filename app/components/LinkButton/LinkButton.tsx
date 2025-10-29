"use client"
import Link from "next/link";
import styles from "./LinkButton.module.css"

type ButtonProps = {
  classes?: string;
  path: string;
  innerText: string;
};

export default function LinkButton({ classes, path, innerText }: ButtonProps) {

  return (
    <Link className={`${classes ? styles[classes] || classes : ""} button`} href={path}>{innerText}</Link>
  );
}