import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "오창훈",
        comment: "안녕하세요 오창훈입니다.",
    },
    {
        name: "김승이",
        comment: "안녕하세요 김승이입니다.",
    },
    {
        name: "유재석",
        comment: "안녕하세요 유재석입니다.",
    },
    {
        name: "강호동",
        comment: "안녕하세요 강호동입니다.",
    },
    {
        name: "이수근",
        comment: "안녕하세요 이수근입니다.",
    },
    {
        name: "이승기",
        comment: "안녕하세요 이승기입니다.",
    },
    {
        name: "노홍철",
        comment: "안녕하세요 노홍철입니다.",
    },
    {
        name: "정형돈",
        comment: "안녕하세요 정형돈입니다.",
    },
    {
        name: "길",
        comment: "안녕하세요 길입니다.",
    },
    {
        name: "김종국",
        comment: "안녕하세요 김종국입니다.",
    },
    {
        name: "최무식",
        comment: "안녕하세요 최무식입니다.",
    },
    {
        name: "장첸",
        comment: "안녕하세요 장첸입니다.",
    },
    {
        name: "마동석",
        comment: "안녕하세요 마동석입니다.",
    },
    {
        name: "추성훈",
        comment: "안녕하세요 추성훈입니다.",
    },
    {
        name: "매미",
        comment: "안녕하세요 매미입니다.",
    },
    {
        name: "잠자리",
        comment: "안녕하세요 잠자리입니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
