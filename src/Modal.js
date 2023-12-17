import React from "react";
import { dataCar } from "./data/cart";

const Modal = ({ isOpen, toggle }) => {
    return (
        <>
            {isOpen && (
                <form className="modal">
                    <h1>Send Request</h1>
                    <div>
                        <input placeholder="Fullname (*)" required />
                        <input placeholder="Phonenumber (*)" required />
                        <input placeholder="Address" required />
                        <select>
                            {dataCar.map((item, index) => (
                                <option key={index}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: 10,
                            gap: 10,
                        }}
                    >
                        <button onClick={() => toggle(false)} type="button">
                            Đóng
                        </button>
                        <button>Gửi</button>
                    </div>
                </form>
            )}
        </>
    );
};

export default Modal;
