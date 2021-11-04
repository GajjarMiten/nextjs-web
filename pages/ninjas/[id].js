import React from "react";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    const paths = users.map((user) => ({
        params: {
            id: user.id.toString(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const user = await res.json();

    return {
        props: {
            ninja: user,
        },
    };
};

const Details = ({ ninja }) => {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    );
};

export default Details;
