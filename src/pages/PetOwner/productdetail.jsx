import { useParams } from "react-router-dom";
import ImageProduct from "../../Component/pet_owner/productdetail/ImageProduct";
import ProductInfo from "../../Component/pet_owner/productdetail/ProductInfo";
import FullInfo from "../../Component/pet_owner/productdetail/FullInfo";
import Policy from "../../Component/pet_owner/productdetail/Policy";


function ProductDetail({ db }) {
    const { id } = useParams();
    const detailproduct = db.find((product) => product.id === Number(id));



    if (!detailproduct) {
        return (
            <div className="container my-5 text-center">
                <h3 className="text-danger">Product not found</h3>
                <p>Please check the product name or go back to the product list.</p>
            </div>
        );
    }

    return (
        <div className="container my-4">

            <div className="row g-4">
                <div className="col-md-6">
                    <ImageProduct product={detailproduct} />
                </div>
                <div className="col-md-6">
                    <ProductInfo product={detailproduct} />
                    <div className="px-4 col-md-7">
                        <Policy />
                    </div>

                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-8">
                    <FullInfo product={detailproduct} />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
