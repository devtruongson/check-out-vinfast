import React from "react";
import { forumData } from "./data/forum";
import { useNavigate } from "react-router-dom";

function Forum() {
    return (
        <div
            style={{
                paddingBottom: 40,
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    paddingTop: 20,
                }}
            >
                ForumCommunity Vinfast VietNam
            </h2>
            <div
                style={{
                    padding: "10px 20px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                {forumData.map((item, index) => (
                    <FormItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Forum;

function FormItem({ item }) {
    const navigate = useNavigate();

    return (
        <div
            className="forum-item"
            style={{
                width: "24%",
            }}
        >
            <img src={item.img} alt={item.title} />
            <div>
                <h1 className="forum-title">{item.title}</h1>
                <p className="view-more">{item.content}</p>
                <button onClick={() => navigate(`/forum/${item.slug}`)}>
                    {"view more"}
                </button>
            </div>
        </div>
    );
}
