import React from "react";

import image from "../stairheaven.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Stairway To Heaven" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-1 lg:pt-64 px-8">
                <h1 className="text 6xl text-purple-100 font-bold cursive leading-none lg:leading-snug home-name">Aloha, I'm Daniel.</h1>
            </section>
        </main>
    )
}