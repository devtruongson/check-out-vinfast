import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
    LuxA20Icon,
    LuxSA20Icon,
    Vf5Icon,
    Vf6Icon,
    Vf8Icon,
    Vf9Icon,
    Vfe34Icon,
} from "./icons/icons";
import { Link } from "react-router-dom";
import { dataCartImage } from "./data/image";

const CarComing = () => {
    const adviceList = [
        {
            title: "Choose the right vehicle type for your needs",
            content:
                "Clearly determine the purpose of using the vehicle, whether it is needed for family, work or personal entertainment.",
        },
        {
            title: "Convenience and safety considerations",
            content:
                "Check the car's safety features, conveniences and modern technology such as ABS brakes, airbags, reversing camera, etc.",
        },
        {
            title: "Fuel efficiency review",
            content:
                "Consider fuel efficiency to save on long-term operating costs.",
        },
    ];

    return (
        <div>
            <CarComingSide />
            <CarComingSideIntro />
            <div className="register-info">
                <div className="register-form">
                    <div>
                        <h4>Sign up to receive information</h4>
                        <p>
                            Sign up to receive information about promotions and
                            translations VinFast case.
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
                <div className="card-container">
                    <h2>Advice when choosing a car</h2>
                    {adviceList.map((advice, index) => (
                        <AdviceCard
                            key={index}
                            title={advice.title}
                            content={advice.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarComing;

function CarComingSide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div
            style={{
                width: "100%",
                overflow: "hidden",
            }}
            className="wp-side-coming"
        >
            <Slider {...settings}>
                <div>
                    <div className="side-item">
                        <img
                            src="/image/banner-vf-9.webp"
                            alt="Hình ảnh coming soon"
                        />
                        <p>
                            VINFAST VF 9 HAS AN EPA CERTIFIED DRIVING RANGE OF
                            330 MILES
                        </p>
                    </div>
                </div>
                <div>
                    <div className="side-item">
                        <img
                            src="/image/banner-vf-6.webp"
                            alt="Hình ảnh coming soon"
                        />
                        <p>
                            VINFAST OFFICIALLY LAUNCHES VF 6 ELECTRIC SUV FOR
                            VIETNAMESE FAMILY
                        </p>
                    </div>
                </div>
                <div>
                    <div className="side-item">
                        <img
                            src="/image/banner-vf-8.webp"
                            alt="Hình ảnh coming soon"
                        />
                        <p>
                            VINFAST VF 8 HAS AN EPA CERTIFIED DRIVING RANGE OF
                            120 MILES
                        </p>
                    </div>
                </div>
                <div>
                    <div className="side-item">
                        <img
                            src="/image/banner-vf-e34.webp"
                            alt="Hình ảnh coming soon"
                        />
                        <p>
                            INTEREST SUPPORT POLICY FOR CUSTOMERS WHEN BUYING
                            VINFAST ELECTRIC CARS
                        </p>
                    </div>
                </div>
                <div>
                    <div className="side-item">
                        <img
                            src="/image/banner-vf-7.webp"
                            alt="Hình ảnh coming soon"
                        />
                        <p>VINFAST officially launched VF7</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export function CarComingSideIntro({ isOpen = false }) {
    const Icons = [
        <Vf5Icon />,
        <Vf6Icon />,
        <Vfe34Icon />,
        <Vf8Icon />,
        <Vf9Icon />,
        <LuxA20Icon />,
        <LuxSA20Icon />,
    ];

    const settings = {
        customPaging: function (i) {
            return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a>{Icons[i]}</a>
            );
        },
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div
            style={{
                width: "100%",
                overflow: "hidden",
            }}
            className="side-introduce-car"
        >
            <Slider {...settings}>
                <CartSideItem
                    slug="vf5"
                    isOpen={isOpen}
                    over={300}
                    seat={5}
                    price="458.000.000 VNĐ"
                />
                <CartSideItem
                    slug="vf6"
                    isOpen={isOpen}
                    over={399}
                    seat={5}
                    price="675.000.000 VNĐ"
                />
                <CartSideItem
                    slug="vfe34"
                    isOpen={isOpen}
                    over={318.6}
                    seat={5}
                    price="710.000.000 VNĐ"
                />
                <CartSideItem
                    slug="vf8"
                    isOpen={isOpen}
                    over={400}
                    seat={5}
                    price="1.090.000.000 VNĐ"
                />
                <CartSideItem
                    slug="vf9"
                    isOpen={isOpen}
                    over={423}
                    seat={"5 - 7"}
                    price="1.491.000.000 VNĐ"
                />
                <CartSideItem
                    slug="luxa2.0"
                    isOpen={isOpen}
                    over={370}
                    seat={5}
                    price="675.000.000 VNĐ"
                />
                <CartSideItem
                    slug="luxsa2.0"
                    isOpen={isOpen}
                    over={370}
                    seat={"5 - 7"}
                    price="800.000.000 VNĐ"
                />
            </Slider>
        </div>
    );
}

const AdviceCard = ({ title, content }) => (
    <div className="card-wp-render">
        <div className="card-content">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
        </div>
    </div>
);

function CartSideItem({ slug, isOpen, price, seat, over }) {
    const car = dataCartImage.find((item) => item.slug === slug);
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className="side-item">
                <img src={car.image[index]} alt="Hình ảnh coming soon" />
                <div
                    className="list-change-image"
                    style={{
                        maxHeight: 439,
                        overflow: "auto",
                    }}
                >
                    {car.image.map((item, indexCurrent) => (
                        <img
                            key={indexCurrent}
                            style={{
                                width: 30,
                                height: 30,
                                cursor: "pointer",
                                border: "1px solid #ccc",
                                padding: 4,
                                borderRadius: 3,
                                borderColor:
                                    indexCurrent === index ? "red" : "#ccc",
                                objectFit: "contain",
                            }}
                            src={item}
                            alt=""
                            onClick={() => setIndex(indexCurrent)}
                        />
                    ))}
                </div>
            </div>
            <div className="info">
                <div>
                    <p>Vehicles</p>
                    <p>SUV</p>
                </div>
                <div>
                    <p>Number of seats</p>
                    <p>{seat} seats</p>
                </div>
                <div>
                    <p>Distance</p>
                    <p>Over {over} km</p>
                </div>
                <div>
                    <p>Price from</p>
                    <p>{price}</p>
                </div>
            </div>
            {isOpen && (
                <div className="view-detail-btn">
                    <Link to={`/detail/${car.slug}`}>View Detail</Link>
                </div>
            )}
        </div>
    );
}
