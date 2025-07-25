import { Button } from "../atoms/Button";

export const Tabs = ({ handleChange, current }) => {
  const tabs = [
    { label: "Pokedex Data", value: "data" },
    { label: "Stats", value: "stats" },
    { label: "Evolution", value: "evolution" },
  ];

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "1em" }}>
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          classname={`tab ${current === tab.value ? 'active' : ''}`}
          onClick={() => handleChange(tab.value)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}