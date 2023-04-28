import React from "react";
import Post from "./Post";

export default function Posts() {
  (posts = {
    id: "1",
    username: "maurosouza",
    userImg:
      "https://play-lh.googleusercontent.com/dmyJVZ5BKcOFM6XaZmTgZjtsHnvj3PqCaxTnuOSwu6HN7a7J3k_aR-023K01L_RTcsI=w600-h300-pc0xffffff-pd",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    caption: "Bela foto",
  }),
    {
      id: "2",
      username: "mairasouza",
      userImg:
        "https://image.shutterstock.com/mosaic_250/2780032/1836020740/stock-photo-profile-picture-of-smiling-millennial-asian-girl-isolated-on-grey-wall-background-look-at-camera-1836020740.jpg",
      img: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg",
      caption: "nova foto",
    };
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
