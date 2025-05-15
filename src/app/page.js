import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { Article } from "@/components/Article";

export default function Home() {
  return (
    <div className="container-fluid  p-0 ">
      <Header/>
      <Article/>
   
    </div>
  );
}
