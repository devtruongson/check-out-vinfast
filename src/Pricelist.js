import React from "react";
import "./App.css";
function Pricelist() {
    return (
        <div
            className="hhhh"
            style={{
                padding: "20px 100px",
            }}
        >
            <div className="price_list--item">
                <img
                    src="/image/hinh5.jpg"
                    className="banggia1"
                    alt="Hình ảnh"
                />
                <div className="price_list--item--child">
                    <h1>VINFAST VF7</h1>
                    <div className="cot1">
                        <table border={1}>
                            <tr
                                style={{
                                    fontWeight: 600,
                                }}
                            >
                                <td>Version</td>
                                <td>Price</td>
                            </tr>
                            <tr>
                                <td>VF7 Base PIN code not included</td>
                                <td>850,000,000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>VF7 Base Includes PIN</td>
                                <td>999,000,000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>VF7 Plus PIN not included</td>
                                <td>999,000,000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>VF7 Plus Includes BATTERY</td>
                                <td>1,199,000,000 VNĐ</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="price_list--item">
                <div className="price_list--item--child">
                    <h1>VINFAST VF8 </h1>
                    <div className="cot2">
                        <table border={1}>
                            <tr
                                style={{
                                    fontWeight: 600,
                                }}
                            >
                                <td>Version</td>
                                <td>Price</td>
                            </tr>
                            <tr>
                                <td>VF8 Eco has NO battery</td>
                                <td>1,090,000,000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>VF8 Plus has NO battery</td>
                                <td>1,270,000,000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>VF8 Eco WITH battery</td>
                                <td>1,290,000,000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>VF8 Plus WITH battery</td>
                                <td>1,470,000,000 VNĐ</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <img
                    src="/image/vinfast_vf8.webp"
                    className="banggia2"
                    alt="Hình ảnh xe"
                />
            </div>
            <div className="price_list--item">
                <img
                    src="/image/img-CE14.webp"
                    className="banggia2"
                    alt="Hình ảnh xe"
                />
                <div className="price_list--item--child">
                    <h1>VINFAST VF9 </h1>
                    <div className="cot1">
                        <table border={1}>
                            <tr
                                style={{
                                    fontWeight: 600,
                                }}
                            >
                                <td>Version</td>
                                <td>Price</td>
                            </tr>
                            <tr>
                                <td>VF9 Eco SID has NO battery</td>
                                <td>1.491.000.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>VF9 Eco SID has battery</td>
                                <td>1.984.000.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>VF9 Eco CATL has battery</td>
                                <td>2.083.000.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>VF9 Eco CATL has NO battery</td>
                                <td>1.566.000.000 VNĐ</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="price_list--item">
                <div className="price_list--item--child">
                    <h1>VINFAST LUX 2.0 </h1>
                    <div className="cot2">
                        <table border={1}>
                            <tr
                                style={{
                                    fontWeight: 600,
                                }}
                            >
                                <td>Version</td>
                                <td>Price</td>
                            </tr>
                            <tr>
                                <td>Lux A2.0 sedan standard</td>
                                <td>1.115.120.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>Lux A2.0 advanced sedan</td>
                                <td>1.206.240.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>Lux A2.0 luxury sedan</td>
                                <td>1.358.554.000 VNĐ</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <img
                    src="/image/hinh2.jpg"
                    className="banggia2"
                    alt="Hình ảnh xe"
                />
            </div>
            <div className="price_list--item">
                <img
                    src="/image/hinh7.jpg"
                    className="banggia2"
                    alt="Hình ảnh xe"
                />
                <div className="price_list--item--child">
                    <h1>VINFAST VF5 </h1>
                    <div className="cot1">
                        <table border={1}>
                            <tr
                                style={{
                                    fontWeight: 600,
                                }}
                            >
                                <td>Version</td>
                                <td>Price</td>
                            </tr>
                            <tr>
                                <td>VF5 PLUSH has NOT battery</td>
                                <td>458.000.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>VF5 PLUSH has battery</td>
                                <td>538.000.000 VNĐ</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricelist;
