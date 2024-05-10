"use client";

import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("World");
  return (
    <main className="w-screen h-screen flex flex-col gap-8 justify-center items-center max-w-2xl mx-auto">
      <h1 className="text-6xl">Hello {name} and good luck 😄!</h1>
      <h3 className="text-3xl font-semibold">
        For this one, please stick to React, Zod, CSS and tailwindcss! 💃
      </h3>
      <p>
        This template also has font awesome icon library installed as well. Feel
        free to use these icons{" "}
        <a
          className="text-blue-500 border-b-2 border-current w-[max-content] inline-flex gap-2 items-center"
          href="https://fontawesome.com/search?m=free&s=solid%2Cbrands%2Cregular"
          target="_blank"
          rel="noopener noreferrer"
        >
          Font Awesome
          <FontAwesomeIcon icon={faFontAwesome} />
        </a>{" "}
        or whatever icon library you want to use :3
      </p>
      <form>
        <input
          className="border-2 border-yellow-500 rounded p-4 text-2xl w-full dark:bg-black dark:text-gray-300 dark:placeholder:text-gray-400"
          name="name"
          placeholder="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </form>
    </main>
  );
}
