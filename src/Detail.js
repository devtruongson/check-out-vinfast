import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataCar } from "./data/cart";
import { dataCartImage } from "./data/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Detail = () => {
    const params = useParams();

    const product = dataCar.find((item) => item.slug === params.slug);
    const dataImage = dataCartImage.find((item) => item.slug === params.slug);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [product]);

    if (!product || !dataImage) {
        return <div>Our Car Has Not Been Launched Yet</div>;
    }

    const settings = {
        customPaging: function (i) {
            return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a>
                    <img
                        style={{
                            width: 40,
                            height: 40,
                            objectFit: "contain",
                        }}
                        src={dataImage.image[i]}
                        alt=""
                    />
                </a>
            );
        },
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
    };

    return (
        <div
            style={{
                overflow: "hidden",
                padding: "40px 0",
            }}
            className="wp-detail"
        >
            <Slider {...settings}>
                {dataImage.image.map((item) => (
                    <div>
                        <img
                            style={{
                                width: "100%",
                                objectFit: "contain",
                                height: 400,
                            }}
                            src={item}
                            alt="Hình Ảnh Xe Ô Tô"
                        />
                    </div>
                ))}
            </Slider>
            <div
                className="detail-wp"
                style={{
                    marginTop: 30,
                }}
            >
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
