import React from "react";
import { useParams } from "react-router-dom";
import { forumData } from "./data/forum";
import Comment from "./Comment";

const ForumDetail = () => {
    const params = useParams();
    const forum = forumData.find((item) => item.slug === params.slug);

    if (!forum) {
        return <div>bài viết không tồn tại trong hệ thống</div>;
    }
    return (
        <div
            style={{
                paddingTop: 30,
            }}
        >
            <div
                style={{
                    padding: "10px 20px",
                    display: "flex",
                    gap: 20,
                }}
            >
                <div>
                    <img
                        style={{
                            borderRadius: 4,
                            objectFit: "cover",
                        }}
                        src={forum.img}
                        alt=""
                    />
                </div>
                <div>
                    <h1
                        style={{
                            marginTop: 0,
                            textTransform: "uppercase",
                        }}
                    >
                        {forum.title}
                    </h1>
                    <p
                        style={{
                            whiteSpace: "pre-wrap",
                            fontSize: 13,
                        }}
                    >
                        {forum.content}
                    </p>
                </div>
            </div>
            <div
                style={{
                    padding: "10px 30px",
                }}
            >
                <Comment
                    link={`https://check-out-vinfast.vercel.app/forum/${forum.slug}`}
                />
            </div>
        </div>
    );
};

export default ForumDetail;
