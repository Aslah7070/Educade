import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Hello, Bootstrap in Next.js 13+</h1>
      <button className="btn btn-success">Click Me</button>
    </div>
  );
}
