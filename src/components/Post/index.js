import React from "react";

import { Container, Avatar, Author, Date, Content, AuthorData } from "./styles";

function Header({ author, date }) {
  return (
    <div className="header">
      <img className="avatar" src={author.avatar} />
      <div className="info">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function Comments({ comments }) {
  return (
    <div className="comments">
      <div className="divider"></div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <Container>
      <Header author={author} date={date} />
      <p className="content">{content}</p>
      <Comments comments={comments} />
    </Container>
  );
}

export default Post;
