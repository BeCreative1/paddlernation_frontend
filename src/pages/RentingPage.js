import React from "react";
import { useState } from "react";
import {
  Navbar,
  SelectPaddleBoardStep,
  Footer,
  RentProcess,
  ExtrasStep,
  Oplysninger,
} from "../components";

const RentingPage = () => {
  const [state, setState] = useState("select");
  return (
    <div className="flex flex-col w-full bg-waves overflow-x-hidden">
      {<Navbar currentPage="RentingPage" />}

      {state === "select" && <RentProcess title={"Udlejning"} step={1} />}
      {state === "select" && (
        <SelectPaddleBoardStep addTrip={() => setState("extras")} />
      )}

      {state === "extras" && <RentProcess title={"Extras"} step={2} />}

      {state === "extras" && (
        <ExtrasStep addTrip={() => setState("oplysninger")} />
      )}

      {state === "oplysninger" && (
        <RentProcess title={"Oplysninger"} step={3} />
      )}
      {state === "oplysninger" && <Oplysninger />}

      {/* <Footer /> */}
    </div>
  );
};

export default RentingPage;
