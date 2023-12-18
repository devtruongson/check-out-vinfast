import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataCar } from "./data/cart";
import { CarComingSideIntro } from "./CarComing";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
    const params = useParams();
    const [carSearch, setCarSearch] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const searchTerm = params.keyword; // Chuỗi để tìm kiếm
        if (!searchTerm) {
            setCarSearch(null);
            return;
        }
        const regex = new RegExp(searchTerm, "i"); // Tạo regex với biểu thức tìm kiếm là searchTerm và 'i' để không phân biệt chữ hoa chữ thường
        const matchedCar = dataCar.filter((item) => regex.test(item.title));
        setCarSearch([...matchedCar]);
    }, [params]);

    return (
        <div>
            <div>
                <h1
                    style={{
                        textAlign: "center",
                        fontStyle: "italic",
                        color: "#555",
                        fontWeight: 500,
                    }}
                >
                    Kết quả tìm kiếm của từ khóa{" "}
                    <strong>{params.keyword}</strong>
                </h1>
            </div>
            {carSearch ? (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        padding: "10px 20px",
                        gap: 8,
                    }}
                >
                    {carSearch.map((item, index) => (
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
            ) : (
                <div>
                    <p
                        style={{
                            paddingLeft: 40,
                        }}
                    >
                        Không có kết quả phù hợp cho từ khóa{" "}
                        <strong>{params.keyword}</strong>
                    </p>
                    <CarComingSideIntro isOpen={true} />
                </div>
            )}
        </div>
    );
};

export default SearchPage;
