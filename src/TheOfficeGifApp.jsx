import { useState } from "react";
import { SelectCharacter } from "./Components/SelectCharacter";
import { GifGrid } from "./Components/GifGrid";
import "./styles/app.css";
import { Footer } from "./Components/Footer";

export const TheOfficeGifApp = () => {
  const [character, setCharacter] = useState("The%20Office%20Michael%20Scott");
  const [isChSelect, setIsChSelect] = useState(false);

  const handleSelectCharacter = (newCharacter) => {
    setCharacter(newCharacter);
    setIsChSelect(true);
  };

  return (
    <div className="root">
      <h1>the office <span className="impactF">GIF APP</span></h1>
      <SelectCharacter handleSelectCharacter={handleSelectCharacter} />
      {
        isChSelect && (<h3>{character.toUpperCase()}</h3>)
      }      
      <GifGrid nowCharacter={character} />
      <Footer />
    </div>
  );
};
