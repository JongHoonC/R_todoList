import React from "react";
import Input from "./Input";
import ListItem from "./ListItem";

const Container = () => {
  return (
    <div className="container">
      <div className="head">
        <Input />
      </div>
      <div className="list">
        <b>날짜</b>
        <b>할 일</b>
        <b>수정 / 삭제</b>
      </div>
      <ListItem />
    </div>
  );
};

export default Container;
