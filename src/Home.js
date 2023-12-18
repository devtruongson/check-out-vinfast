import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { dataCar } from "./data/cart";
import { useNavigate } from "react-router-dom";

function Home({ toggle }) {
    const navigate = useNavigate();

    return (
        <div>
            <div className="background">
                <img src="/image/banner_vf_9 1.jpg" alt="" />
            </div>
            <div className="logo2">
                <h1
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 400px",
                    }}
                >
                    <img
                        onClick={() => toggle(true)}
                        alt=""
                        src="/image/icon_tuvan 1.jpg"
                        className="logotuvan"
                    />
                    <img
                        onClick={() => toggle(true)}
                        src="/image/icon_dangky 1.jpg"
                        className="logodangky"
                        alt=""
                    />
                </h1>
            </div>
            <h1 className="products">Products</h1>
            <div className="image-container">
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        padding: "10px 20px",
                        gap: 8,
                    }}
                >
                    {dataCar.map((item, index) => (
                        <div
                            className="forum-item"
                            style={{
                                width: "24%",
                                marginBottom: 20,
                            }}
                            key={index}
                        >
                            <img src={item.img} alt={item.title} />
                            <div>
                                <h1 className="forum-title">{item.title}</h1>
                                <p className="view-more">{item.decs}</p>
                                <button
                                    onClick={() =>
                                        navigate(`/detail/${item.slug}`)
                                    }
                                >
                                    {"view more"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Login">
                <div
                    className="button-container"
                    style={{
                        display: "flex",
                        gap: 10,
                        marginBottom: 10,
                    }}
                >
                    <Link
                        style={{
                            border: "1px solid #ccc",
                            padding: "6px 10px",
                            borderRadius: 10,
                        }}
                        to={"/login-and-register/login"}
                    >
                        Login
                    </Link>
                    <Link
                        style={{
                            border: "1px solid #ccc",
                            padding: "6px 10px",
                            borderRadius: 10,
                        }}
                        to={"/login-and-register/register"}
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
