import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="background">
                <img src="/image/banner_vf_9 1.jpg" />
            </div>
            <div className="logo2">
                <h1>
                    <img src="/image/icon_tuvan 1.jpg" className="logotuvan" />
                    <img
                        src="/image/icon_dangky 1.jpg"
                        className="logodangky"
                    />
                </h1>
            </div>
            <h1 className="products">Products</h1>
            <div className="image-container">
                <table>
                    <tr className="hinh">
                        <td>
                            <img src="image/hinh5.jpg" />
                        </td>
                        <td>
                            <img src="image/hinh6.jpg" />
                        </td>
                        <td>
                            <img src="image/hinh7.jpg" />
                        </td>
                    </tr>
                    <tr>
                        <td>xe 2</td>
                        <td>xe 3</td>
                        <td>xe 4</td>
                    </tr>
                </table>
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
