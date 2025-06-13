import "../styles/newsCard.css";

function NewsCard({titulo, descripcion, fuente, imagen}) {
    const urlImage = imagen 
        ? imagen 
        : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"

    return (
        <div className="card">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <small>{fuente}</small>
            <img src={urlImage} alt={titulo} className="card-img"/>
        </div>
    );
}

export default NewsCard;