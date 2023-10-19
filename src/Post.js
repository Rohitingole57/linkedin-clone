import React, { forwardRef, useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import InputOption from "./InputOption";

const Post = forwardRef(({ name, discription, message, photoURL }, ref) => {
  const [like, setLike] = useState(0);
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoURL}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{discription}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption
          Icon={ThumbUpAltOutlinedIcon}
          title=""
          color="gray"
        ></InputOption>
        <p className="Like" onClick={() => setLike(like + 1)}>
          {" "}
          {like}
        </p>
        <InputOption Icon={ThumbDownAltOutlinedIcon} title="" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
      </div>
    </div>
  );
});

export default Post;
