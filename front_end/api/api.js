//fetch ou Axios

import axios from "axios";

const URL = "http://localhost:3000";
const responsArtists = await axios.get(`${URL}/artists`);
const responsSongs = await axios.get(`${URL}/songs`);
export const artistArray = responsArtists.data;
export const songsArray = responsSongs.data;
