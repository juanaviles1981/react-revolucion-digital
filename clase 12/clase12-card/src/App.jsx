import "./App.css";
import NewsCard from "./Components/NewsCard";
import NewsData from "./Data/NewsData";

function App() {
  return (
    <div className="App">
      <h1 className="titulo">Practica clase 12 - Cards</h1>
      <div className="cards-container">
        {NewsData.map((noticia) => (
          <NewsCard
            key={noticia.id}
            titulo={noticia.titulo}
            descripcion={noticia.descripcion}
            fuente={noticia.fuente}
            imagen={noticia.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
