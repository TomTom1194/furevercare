import { Link } from "react-router-dom";
import "../../../index.css";

function ProductList({ db }) {
  if (!db || db.length === 0) {
    return <h2 className="text-center my-5 text-danger">No Product Found!</h2>;
  }

  return (
    <div className="container my-4">
      <div className="row g-4">
        {db.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-4">
            <Link
              to={`/petowner/petproduct/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow-sm h-100">
                <img
                  src={product.mainImage}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p
                    className="card-text"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      minHeight: "3rem"
                    }}
                  >
                    {product.description}
                  </p>

                  <div className="d-flex align-items-center mb-2 gap-2">
                    <p className="text-muted mb-0">
                      Sold: <strong>{product.sale_quantity}</strong>
                    </p>
                    <div className="d-flex align-items-center">
                      <span style={{ color: "#FFD700", marginRight: "5px" }}>⭐</span>
                      <p className="fw-bold mb-0">{product.rating.toFixed(1)}</p>
                    </div>
                  </div>

                  <h5 className="card-text fw-bold mb-3">${product.price}</h5>
                  <button className="btn btn-primary mt-auto">Buy Now</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
