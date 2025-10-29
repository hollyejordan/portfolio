"use client"
import Link from "next/link";

type ButtonProps = {
  path: string;
  innerText: string;
};

export default function LinkButton({ path, innerText }: ButtonProps) {

  return (
    <Link className="button" href={path}>{innerText}</Link>
  );
}