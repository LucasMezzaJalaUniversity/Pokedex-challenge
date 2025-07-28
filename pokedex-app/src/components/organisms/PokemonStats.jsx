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
      <div style={{padding: "1em", boxShadow: "0px 4px 4px 0px #00000040"}}>
        {current === "data" && <Data />}
        {current === "stats" && <Stats />}
        {current === "evolution" && <Evolution />}
      </div>
    </div>
  );
}