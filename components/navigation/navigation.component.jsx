import Link from "next/link";
import Head from "next/head";
import styles from "./nav.module.css";

const style = "hover:underline";

export const Navigation = () => {
  return (
    <nav className="fixed z-50 w-full flex justify-between items-center py-5 px-10 text-sm">
      <Head>
        <link
          rel="stylesheet"
          href="'https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap'"
        />
      </Head>

      <Link href={"/"}>
        <h3 className={styles.logo + " self-center text-3xl text-blue-500"}>
          Mahyar-Fardin
        </h3>
      </Link>
      
      <div className="w-1/2 flex justify-end">
        <ul className="sm:flex w-2/3 justify-evenly cursor-pointer self-center font-bold hidden">
          <Link href="/#hero">
            <li className={style}>Home</li>
          </Link>
          <Link href="/#about">
            <li className={style}>About</li>
          </Link>
          <Link href="/#skills">
            <li className={style}>Skills</li>
          </Link>
          <Link href="/#projects">
            <li className={style}>Projects</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
