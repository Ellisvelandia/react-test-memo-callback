import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="page">
      <header>
        <form className="form">
          <input type="text" placeholder="Search Avengers, Star Wars, The matrix..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
       <main>
        Aqui iran los resultados
       </main>
    </div>
  );
};

export default App;
