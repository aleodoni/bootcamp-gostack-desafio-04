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

function Comments() {
  return <div />;
}

function Post({ author, date, content, comments }) {
  return (
    <Container>
      <Header author={author} date={date} />
      <p className="content">{content}</p>
      <Comments />
    </Container>
  );
}

export default Post;
