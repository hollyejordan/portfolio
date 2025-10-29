"use client"
import Link from "next/link";

type ButtonProps = {
  classes?: string;
  path: string;
  innerText: string;
};

export default function LinkButton({ classes, path, innerText }: ButtonProps) {

  return (
    <Link className="button" href={path}>{innerText}</Link>
  );
}