import { useState } from "react";
import { Tabs } from "../molecules/Tabs";
import { Data } from "../molecules/Data";
import { Stats } from "../molecules/Stats";
import { Evolution } from "../molecules/Evolution";

export const PokemonStats = () => {
  const [current, setCurrent] = useState("data");

  const handleChange = (newValue) => {
    setCurrent(newValue);
  };

  return (
    <div style={{ marginTop: "2em" }}>
      <Tabs handleChange={handleChange} current={current} />
      {current === "data" && <Data />}
      {current === "stats" && <Stats />}
      {current === "evolution" && <Evolution />}
    </div>
  );
}