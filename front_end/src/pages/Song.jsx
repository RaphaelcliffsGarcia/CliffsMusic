import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  if (!id) {
    console.error("ID da música não informado na URL");
    return <div>ID da música não informado.</div>;
  }

  const safeSongsArray = Array.isArray(songsArray) ? songsArray : [];

  const filteredSongs = safeSongsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  );

  if (filteredSongs.length === 0) {
    console.error("Nenhuma música encontrada com o ID:", id);
    return <div>Música não encontrada</div>;
  }

  const {
    image = "",
    name = "Nome indisponível",
    duration = "00:00",
    artist = "",
    audio = "",
  } = filteredSongs[0] || {};

  const filteredArtists = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  );

  if (filteredArtists.length === 0) {
    console.error("Nenhum artista encontrado com o nome:", artist);
    return <div>Artista não encontrado</div>;
  }

  const artistObj = filteredArtists[0];

  const songsArrayFromArtist = safeSongsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  if (songsArrayFromArtist.length === 0) {
    console.error("Nenhuma música encontrada para o artista:", artist);
    return <div>Sem músicas para este artista</div>;
  }

  const maxIndex = songsArrayFromArtist.length - 1;
  const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
  const randomIndex2 = Math.floor(Math.random() * (maxIndex + 1));

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]?._id || "";
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]?._id || "";

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          {image ? (
            <img src={image} alt={`Imagem da música ${name}`} />
          ) : (
            <p>Imagem não disponível</p>
          )}
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
