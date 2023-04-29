import React from "react";
import Router, { useRouter } from "next/router";
import { Navbar } from "@/components";

function ErrorPage() {
  const router = useRouter();

  return (
    <section>
      {<Navbar />}
      <div className="flex justify-center items-center w-full h-screen bg-waves">
        <div className="text-center">
          <h1 className="text-4xl text-neutral-800 font-bold mb-4">
            Sorry... That page doesn't exist
          </h1>
          <button
            className="bg-bluepb-800 hover:bg-bluepb-600 mt-5 text-white font-bold py-2 px-4 rounded-lg"
            onClick={() => router.push("/")}
          >
            Go to the main page
          </button>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
