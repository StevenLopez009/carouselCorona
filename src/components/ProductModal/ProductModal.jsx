import "./ProductModal.css"

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="product-modal">
      <div className="product-modal__image-container">
        <button className="product-modal__close-button" onClick={onClose}>×</button>
        <img
          className="product-modal__image"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="product-modal__content">
        <h2 className="product-modal__title">{product.title}</h2>
        <div className="product-modal__details">
          <p className="product-modal__price">$ {product.price}</p>
          <p className="product-modal__quantity">{product.quantity}</p>
        </div>
        <p className="product-modal__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla,
          magnam facilis quibusdam corrupti quisquam labore debitis eligendi
          numquam corporis fuga officiis voluptate fugit. Dicta reiciendis at eius recusandae ducimus!
        </p>
        <button className="product-modal__button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductModal;
