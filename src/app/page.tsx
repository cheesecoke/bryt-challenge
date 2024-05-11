"use client";

import { useState } from "react";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StepForm from "./components/StepForm";

export default function Home() {
  const [name, setName] = useState("World");
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <StepForm />
    </main>
  );
}
