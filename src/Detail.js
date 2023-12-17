import React from "react";
import { useParams } from "react-router-dom";
import { dataCar } from "./data/cart";

const Detail = () => {
    const params = useParams();

    const product = dataCar.find((item) => item.slug == params.slug);
    if (!product) {
        return <div>Our Car Has Not Been Launched Yet</div>;
    }

    return (
        <div>
            <img
                style={{
                    width: "100%",
                    objectFit: "cover",
                }}
                src={product.img}
                alt="Hình Ảnh Xe Ô Tô"
            />
            <div className="detail-wp">
                <h1>{product.title}</h1>
                <p>
                    Price from <strong>{product.price}</strong>
                </p>
                <p>
                    <strong>{product.Seating}</strong>
                </p>
                <div className="register-info">
                    <div className="register-form">
                        <div>
                            <h4>Sign up to receive information</h4>
                            <p>
                                Sign up to receive information about promotions
                                and translations VinFast case.
                            </p>
                        </div>
                        <div>
                            <input placeholder="Enter you email" />
                            <button>Register</button>
                        </div>
                        <p>
                            By registering, you confirm that you have read,
                            understood and agree to VinFast's Privacy Policy.
                        </p>
                    </div>
                </div>
                <p
                    className="desc_and_hint"
                    style={{
                        marginTop: 30,
                    }}
                >
                    {product.decs}
                </p>
                <p className="desc_and_hint">{product.hint}</p>
            </div>
        </div>
    );
};

export default Detail;
