import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page can not be found</h2>
            <p>
                Go back to the{" "}
                <Link href="/">
                    <a>HomePage</a>
                </Link>
            </p>
        </div>
    );
};

export default NotFound;
