export default function ProductCard({ product, deleteHandler }) {
  const cardStyles = {
    width: "18rem",
    maxHeight: "35rem",
    // minWidth: "18rem",
    // margin: "10px",
  };
  return (
    <div className="card" style={cardStyles}>
      <img src={product.images[0]} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h3 className="card-title">{product.price}</h3>
        <p className="card-text">{product.description.slice(0, 30)}...</p>
        <a href="#" className="btn btn-primary">
          Подробнее
        </a>
        <button
          onClick={() => deleteHandler(product.id)}
          className="btn btn-danger"
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
