import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
            </Head>
            <div>
                <h1 className={styles.title}>Home</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti, porro laboriosam facere iure quam sed. Enim
                    corrupti neque nemo, accusamus quaerat autem eveniet itaque
                    sit vero minima eius animi minus!
                </p>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti, porro laboriosam facere iure quam sed. Enim
                    corrupti neque nemo, accusamus quaerat autem eveniet itaque
                    sit vero minima eius animi minus!
                </p>
                <Link href="/ninjas">
                    <a className={styles.btn}>See Ninja Listing</a>
                </Link>
            </div>
        </>
    );
};

export default Home;
