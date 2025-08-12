import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* Item list de Artistas */}
      <ItemList title="Artistas Populares" items={5} />
      {/* Item list de Músicas  */}
      <ItemList title="Músicas Populares" items={10} />
    </div>
  );
};

export default Main;
