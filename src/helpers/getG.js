import { api } from "./api";

export const getG = async (character) => {
    const url = `${api}&q=${character}%20The%20Office&limit=5`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))
    return gifs;
}