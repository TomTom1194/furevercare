

function FullInfo({ product }) {

    return (
        <div className="my-4">
            <div
                className="card bg-light border-0 rounded-3"
            >
                <div className="card-body p-4">
                    <h3 className="fw-bold text-brown mb-4">
                        Product Information
                    </h3>

                    <table className="table table-striped table-hover align-middle">
                        <tbody>
                            <tr>
                                <th style={{ width: "30%" }}>Name</th>
                                <td>{product.name}</td>
                            </tr>
                            <tr>
                                <th style={{ width: "30%" }}>Category</th>
                                <td>{product.typeProduct}</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td>
                                    <span>
                                        ${product.price}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Sold</th>
                                <td>{product.sale_quantity}</td>
                            </tr>
                            <tr>
                                <th>Rating</th>
                                <td>
                                    <span style={{ color: "#FFD700" }}>⭐</span>{" "}
                                    <strong>{product.rating.toFixed(1)}</strong>
                                </td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td
                                    style={{
                                        whiteSpace: "pre-line",
                                        textAlign: "justify",
                                    }}
                                >
                                    {product.description}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default FullInfo;
