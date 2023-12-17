/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LoginAndRegister = () => {
    const [isLogin, setIsLogin] = useState(false);
    const params = useParams();
    const router = useNavigate();

    useEffect(() => {
        if (!params.method) return;
        setIsLogin(params.method === "login");
    }, []);

    return (
        <form className="auth-wp">
            <div className="row">
                <div className="col">
                    <h1>
                        {isLogin
                            ? "Login Your Account"
                            : "Sign up for an account today"}
                    </h1>
                    <p>
                        {isLogin
                            ? "Logging into an account on online platforms brings many benefits to users. Here are some important benefits of logging in to your account"
                            : `Register an account on online platforms Many benefits
                            for users, from personalized experiences to safety and
                            convenience in information management personal message.
                            Here are some important benefits of account registration`}
                    </p>
                </div>
                <div className="col">
                    <div
                        style={{
                            marginBottom: 15,
                        }}
                    >
                        <label>Enter your email</label>
                        <input
                            placeholder="Enter your email"
                            type="email"
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div
                            style={{
                                marginBottom: 15,
                            }}
                        >
                            <label>Enter your name</label>
                            <input
                                required
                                placeholder="Enter your name"
                                type="text"
                            />
                        </div>
                    )}
                    <div
                        style={{
                            marginBottom: 15,
                        }}
                    >
                        <label>Enter your password</label>
                        <input
                            placeholder="Enter your password"
                            type="password"
                            required
                        />
                    </div>
                    <div
                        style={{
                            marginBottom: 4,
                        }}
                    >
                        <label>Confirm your password</label>
                        <input
                            required
                            placeholder="Confirm your password"
                            type="password"
                        />
                    </div>
                    <p
                        style={{
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            justifyContent: "end",
                            marginBottom: 15,
                            fontSize: 12,
                            color: "blue",
                        }}
                    >
                        <span
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                setIsLogin(!isLogin);
                                isLogin
                                    ? router("/login-and-register/register")
                                    : router("/login-and-register/login");
                            }}
                        >
                            {isLogin
                                ? "You do not account? register"
                                : "you has account? Login"}
                        </span>
                    </p>
                    <div>
                        <button>{isLogin ? "Login" : "Register"}</button>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default LoginAndRegister;
