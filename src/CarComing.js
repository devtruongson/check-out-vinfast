import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Vf5Icon, Vf6Icon, Vf8Icon, Vf9Icon, Vfe34Icon } from "./icons/icons";
import { Link } from "react-router-dom";

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
                <div>
                    <div className="side-item">
                        <img
                            src="/image/vf-5.webp"
                            alt="Hình ảnh coming soon"
                        />
                    </div>
                    <div className="info">
                        <div>
                            <p>Vehicles</p>
                            <p>SUV</p>
                        </div>
                        <div>
                            <p>Number of seats</p>
                            <p>5 seats</p>
                        </div>
                        <div>
                            <p>Distance</p>
                            <p>Over 300 km</p>
                        </div>
                        <div>
                            <p>Price from</p>
                            <p>458.000.000 VNĐ</p>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="view-detail-btn">
                            <Link to="/detail/vf5">View Detail</Link>
                        </div>
                    )}
                </div>
                <div>
                    <div className="side-item">
                        <img
                            src="/image/vf-6.webp"
                            alt="Hình ảnh coming soon"
                        />
                    </div>
                    <div className="info">
                        <div>
                            <p>Vehicles</p>
                            <p>SUV</p>
                        </div>
                        <div>
                            <p>Number of seats</p>
                            <p>5 seats</p>
                        </div>
                        <div>
                            <p>Distance</p>
                            <p>Over 399 km</p>
                        </div>
                        <div>
                            <p>Price from</p>
                            <p>675.000.000 VNĐ</p>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="view-detail-btn">
                            <Link to="/detail/vf6">View Detail</Link>
                        </div>
                    )}
                </div>
                <div>
                    <div className="side-item">
                        <img
                            src="/image/vf-e34.webp"
                            alt="Hình ảnh coming soon"
                        />
                    </div>
                    <div className="info">
                        <div>
                            <p>Vehicles</p>
                            <p>SUV</p>
                        </div>
                        <div>
                            <p>Number of seats</p>
                            <p>5 seats</p>
                        </div>
                        <div>
                            <p>Distance</p>
                            <p>Over 318.6 km</p>
                        </div>
                        <div>
                            <p>Price from</p>
                            <p>710.000.000 VNĐ</p>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="view-detail-btn">
                            <Link to="/detail/vfe34">View Detail</Link>
                        </div>
                    )}
                </div>
                <div>
                    <div className="side-item">
                        <img
                            src="/image/vf-8.webp"
                            alt="Hình ảnh coming soon"
                        />
                    </div>
                    <div className="info">
                        <div>
                            <p>Vehicles</p>
                            <p>SUV</p>
                        </div>
                        <div>
                            <p>Number of seats</p>
                            <p>5 seats</p>
                        </div>
                        <div>
                            <p>Distance</p>
                            <p>Over 400 km</p>
                        </div>
                        <div>
                            <p>Price from</p>
                            <p>1.090.000.000 VNĐ</p>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="view-detail-btn">
                            <Link to="/detail/vf8">View Detail</Link>
                        </div>
                    )}
                </div>
                <div>
                    <div className="side-item">
                        <img
                            src="/image/vf-9.webp"
                            alt="Hình ảnh coming soon"
                        />
                    </div>
                    <div className="info">
                        <div>
                            <p>Vehicles</p>
                            <p>SUV</p>
                        </div>
                        <div>
                            <p>Number of seats</p>
                            <p>6 - 7 seats</p>
                        </div>
                        <div>
                            <p>Distance</p>
                            <p>Over 423 km</p>
                        </div>
                        <div>
                            <p>Price from</p>
                            <p>1.491.000.000 VNĐ</p>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="view-detail-btn">
                            <Link to="/detail/vf9">View Detail</Link>
                        </div>
                    )}
                </div>
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
