import { Button } from "../atoms/Button";
import './Tabs.css'

export const Tabs = ({ handleChange, current }) => {
  const tabs = [
    { label: "Pokedex Data", value: "data" },
    { label: "Stats", value: "stats" },
    { label: "Evolution", value: "evolution" },
  ];

  return (
    <div className="tabs">
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