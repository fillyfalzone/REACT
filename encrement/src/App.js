import { useState } from "react";

// un Composant en rect
function App() {
  // state (état ou données)
  const [compteur, setCompteur] = useState(1);

  // comportements
  const handleClickUp = () => {
    setCompteur(compteur + 1);
    console.log(compteur);
  };
  const handleClickDown = () => {
    if (compteur > 0) {
      setCompteur(compteur - 1);
    }
    console.log(compteur);
  };

  // affichage (rendu)
  return (
    <div className="container">
      <h1>compteur : {compteur}</h1>
      <button onClick={handleClickUp} className="btn btn-success py-1 px-2 m-2">
        Incrémente
      </button>
      <button
        onClick={handleClickDown}
        className="btn btn-danger py-1 px-2 m-2"
      >
        décrémente
      </button>
    </div>
  );
}


export default App;
