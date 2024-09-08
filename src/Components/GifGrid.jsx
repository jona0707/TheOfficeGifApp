import { useEffect, useState } from "react";
import { getG } from "../helpers/getG";
import { GifItem } from "./GifItem";

export const GifGrid = ({ nowCharacter }) => {
  const [Gifs, setGifs] = useState([]);

  const getGifs = async () => {
    const newGifs = await getG( nowCharacter );
    setGifs(newGifs);
  };

  useEffect(() => {
    getGifs();
  }, [nowCharacter]);
  return (
    <>
      <div className="gifs">
        {
            Gifs.map(gif=>(
                <GifItem key={gif.id} {...gif} />
            ))
        }
      </div>
    </>
  );
};
