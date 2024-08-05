import React from "react";
import { ways } from "../data";
import WayToTeach from "./WayToTeach";

export const TeachingSection = () => {
  return (
    <section>
      <h3>Наш подход</h3>

      <ul>
        {ways.map((way) => (
          // <WayToTeach title={way.title} description={way.description} />
          <WayToTeach {...way} key={way.title} />
        ))}
      </ul>
    </section>
  );
};
