import React, { useState } from "react";
import { forumData } from "./data/forum";

function Forum() {
    return (
        <div
            style={{
                padding: "30px 0",
            }}
        >
            {forumData.map((item, index) => (
                <FormItem key={index} item={item} />
            ))}
        </div>
    );
}

export default Forum;

function FormItem({ item }) {
    const [isViewMore, setIsViewMore] = useState(false);

    return (
        <div className="forum-item">
            <img src={item.img} alt={item.title} />
            <div>
                <h1>{item.title}</h1>
                <p className={isViewMore ? "view-less" : "view-more"}>
                    {item.content}
                </p>
                <button onClick={() => setIsViewMore(!isViewMore)}>
                    {isViewMore ? "View less" : "view more"}
                </button>
            </div>
        </div>
    );
}
