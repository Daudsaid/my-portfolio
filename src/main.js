import React from "react";

export default function Main({ userName, num }) {
    return (
        <main className="Main">
            <h2>Hello, {userName}</h2>
            <p>You are in position no. {num}</p>
        </main>
    );
}