import { BtnCharacters } from "./BtnCharacters";

export const SelectCharacter = ({ handleSelectCharacter }) => {
  const handleOnSubmit = (character) => {
    handleSelectCharacter(character);
  };

  const characters = ["Michael", "Pam", "Jim", "Dwight", "Angela", "Kevin", "Oscar", "Phyllis", "Stanley", "Darryl", "Ryan", "Kelly", "Andy", "Erin", "Gabe", "Creed"];
  return (
    <div className="btns">
      {characters.map((character) => (
        <BtnCharacters
          key={character}
          c={character}
          handleOnSubmit = {handleOnSubmit}
        />
      ))}
    </div>
  );
};
