import "./ProductCard.css"

const ProductCard = ({ image, title, price, quantity, onClick }) => {
  return (
    <div
      className="product-card"
      onClick={onClick}
    >
      <img
        className="product-card__image"
        src={image}
        alt={title}
      />
      <div className="product-card__info">
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__details">
          <p className="product-card__price">{price}</p>
          <p className="product-card__quantity">{quantity}</p>
        </div>
      </div>
      <button className="product-card__button">+AGREGAR</button>
    </div>
  );
};

export default ProductCard;